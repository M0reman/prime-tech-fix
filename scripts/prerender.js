#!/usr/bin/env node
/**
 * Вариант B: пре-рендер при сборке.
 * Список URL из prerender-urls.js; для каждого создаётся index.html.
 * При наличии dist/server/entry-server.js используется render() для подстановки контента и мета.
 * Интеграция: npm run build:static (или build + generate:rss + node scripts/prerender.js)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const templatePath = path.join(distDir, 'index.html');
const serverEntryPath = path.join(projectRoot, 'dist', 'server', 'entry-server.js');
const API_BASE_URL = process.env.VITE_BACKEND_URL || 'http://localhost:5000';
const SSR_OUTLET = '<!--ssr-outlet-->';

function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeJsonInScript(json) {
  return json.replace(/<\/script>/gi, '<\\/script>');
}

async function getUrls() {
  return new Promise((resolve, reject) => {
    const child = spawn('node', [path.join(__dirname, 'prerender-urls.js')], {
      cwd: projectRoot,
      stdio: ['inherit', 'pipe', 'inherit'],
      env: { ...process.env },
    });
    let data = '';
    child.stdout.on('data', (chunk) => { data += chunk; });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code !== 0) reject(new Error(`prerender-urls exited ${code}`));
      try {
        resolve(JSON.parse(data));
      } catch (e) {
        reject(new Error('prerender-urls: неверный JSON'));
      }
    });
  });
}

async function fetchBlogPost(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blog/${slug}`);
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

async function main() {
  const urls = await getUrls();
  if (!fs.existsSync(templatePath)) {
    throw new Error('Сначала выполните vite build. Файл dist/index.html не найден.');
  }
  let template = fs.readFileSync(templatePath, 'utf-8');
  let render = null;
  if (fs.existsSync(serverEntryPath)) {
    const mod = await import(pathToFileURL(serverEntryPath).href);
    render = mod.render;
  } else {
    console.error('Ошибка: dist/server/entry-server.js не найден. Выполните: npm run build:server');
    process.exit(1);
  }

  if (!template.includes(SSR_OUTLET)) {
    console.error('Ошибка: в шаблоне dist/index.html нет плейсхолдера <!--ssr-outlet-->. Используйте сборку с режимом prerender (npm run build:static).');
    process.exit(1);
  }

  console.log(`Пре-рендер: ${urls.length} URL (с контентом)`);

  for (const urlPath of urls) {
    let html = template;
    let preloadedBlogPost = null;
    const blogMatch = urlPath.match(/^\/blog\/([^/]+)$/);
    if (blogMatch && render) {
      preloadedBlogPost = await fetchBlogPost(blogMatch[1]);
    }

    if (render) {
      const baseUrl = `https://serviceprime13.ru${urlPath}`;
      const { html: appHtml, title, description, metaTags, linkTags, preloadedState } = render({
        url: baseUrl,
        preloadedBlogPost,
      });
      const stateScript = preloadedState
        ? `<script>window.__PRELOADED_STATE__=${escapeJsonInScript(JSON.stringify(preloadedState))}</script>`
        : '';
      html = template
        .replace(SSR_OUTLET, appHtml + stateScript)
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
        .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(description)}" />`);
      if (html.includes('<!-- SEO_INJECT -->')) {
        html = html.replace('<!-- SEO_INJECT -->', [metaTags, linkTags].filter(Boolean).join('\n    '));
      } else {
        const headClose = html.indexOf('</head>');
        if (headClose !== -1) {
          const inject = [metaTags, linkTags].filter(Boolean).join('\n    ');
          html = html.slice(0, headClose) + '\n    ' + inject + '\n  ' + html.slice(headClose);
        }
      }
    }

    const dir = urlPath === '/' ? distDir : path.join(distDir, urlPath.replace(/^\//, ''));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  }

  const rootIndexPath = path.join(distDir, 'index.html');
  const rootHtml = fs.readFileSync(rootIndexPath, 'utf-8');
  if (rootHtml.includes(SSR_OUTLET)) {
    console.error('Ошибка: в dist/index.html (главная) остался плейсхолдер. Контент не подставлен.');
    process.exit(1);
  }

  const pagesToCheck = ['remont-televizorov', 'contact'];
  for (const name of pagesToCheck) {
    const p = path.join(distDir, name, 'index.html');
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf-8');
      if (content.includes(SSR_OUTLET)) {
        console.error(`Ошибка: в ${name}/index.html остался плейсхолдер. Контент не подставлен.`);
        process.exit(1);
      }
    }
  }

  console.log('Готово.');
  console.log('Для деплоя на статический хостинг (Timeweb и др.) загрузите всю папку dist. Команда сборки: npm run build:static');
  console.log('Важно: хостинг должен отдавать по путям (например /contact → contact/index.html), а не один index.html для всех URL.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
