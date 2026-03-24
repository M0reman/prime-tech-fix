import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const clientDir = path.join(projectRoot, 'dist', 'client');
const templatePath = path.join(clientDir, 'index.html');

const SSR_OUTLET = '<!--ssr-outlet-->';
const API_BASE_URL = process.env.VITE_BACKEND_URL || 'http://localhost:5000';

const app = express();

let render;
let template = '';

async function loadServerBundle() {
  const serverPath = path.join(projectRoot, 'dist', 'server', 'entry-server.js');
  const mod = await import(pathToFileURL(serverPath).href);
  render = mod.render;
}

function loadTemplate() {
  if (fs.existsSync(templatePath)) {
    template = fs.readFileSync(templatePath, 'utf-8');
  }
}

async function fetchBlogPost(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blog/${slug}`);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('SSR: не удалось загрузить пост блога:', slug, err?.message);
  }
  return null;
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJsonInScript(json) {
  return json.replace(/<\/script>/gi, '<\\/script>');
}

app.use(express.static(clientDir, { index: false }));

const rssPath = path.join(clientDir, 'rss.xml');

function sendRssFeed(res) {
  if (!fs.existsSync(rssPath)) {
    res.status(404).type('text/plain').send('RSS файл не найден. Выполните сборку и generate:rss.');
    return;
  }
  res.type('application/rss+xml; charset=utf-8');
  res.sendFile(path.resolve(rssPath));
}

app.get('/rss', (_req, res) => {
  sendRssFeed(res);
});

app.get('/rss/', (_req, res) => {
  sendRssFeed(res);
});

app.use(async (req, res) => {
  const url = req.originalUrl;
  if (!render || !template) {
    res.status(500).send('SSR не инициализирован. Выполните build:client и build:server.');
    return;
  }

  try {
    let preloadedBlogPost = null;
    const blogMatch = url.match(/^\/blog\/([^/?#]+)/);
    if (blogMatch) {
      preloadedBlogPost = await fetchBlogPost(blogMatch[1]);
    }

    const { html, title, description, metaTags, linkTags, preloadedState } = render({
      url,
      preloadedBlogPost,
    });

    const stateScript = preloadedState
      ? `<script>window.__PRELOADED_STATE__=${escapeJsonInScript(JSON.stringify(preloadedState))}</script>`
      : '';

    let output = template
      .replace(SSR_OUTLET, html + stateScript)
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(description)}" />`);

    const seoInject = [metaTags, linkTags].filter(Boolean).join('\n    ');
    if (output.includes('<!-- SEO_INJECT -->')) {
      output = output.replace('<!-- SEO_INJECT -->', seoInject);
    } else {
      const headClose = output.indexOf('</head>');
      if (headClose !== -1) {
        output = output.slice(0, headClose) + '\n    ' + seoInject + '\n  ' + output.slice(headClose);
      }
    }

    res.status(200).set({ 'Content-Type': 'text/html' }).end(output);
  } catch (e) {
    console.error('SSR error:', e);
    res.status(500).end('Ошибка рендеринга.');
  }
});

const port = process.env.PORT || 4173;

async function start() {
  await loadServerBundle();
  loadTemplate();
  app.listen(port, () => {
    console.log(`SSR server: http://localhost:${port}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
