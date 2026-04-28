import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const clientDir = path.join(projectRoot, 'dist', 'client');
const templatePath = path.join(clientDir, 'index.html');

const SSR_OUTLET = '<!--ssr-outlet-->';

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

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

app.use(express.static(clientDir, { index: false }));

app.use(async (req, res) => {
  const url = req.originalUrl;
  if (!render || !template) {
    res.status(500).send('SSR не инициализирован. Выполните build:client и build:server.');
    return;
  }

  try {
    const { html, title, description, metaTags, linkTags } = render({ url });

    let output = template
      .replace(SSR_OUTLET, html)
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
