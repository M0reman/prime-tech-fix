import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import {
  ROUTES_META,
  getCanonicalUrl,
  DEFAULT_IMAGE,
  type RouteMeta,
} from './src/seo/routesMeta';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Экранирует содержимое JSON внутри <script>, чтобы не сломать парсер. */
function escapeJsonInScript(json: string): string {
  return json.replace(/<\/script>/gi, '<\\/script>');
}

function buildSeoBlock(meta: RouteMeta, routePath: string): string {
  const title = escapeHtml(meta.title);
  const desc = escapeHtml(meta.description);
  const keywords = escapeHtml(meta.keywords);
  const url = getCanonicalUrl(routePath);

  const parts = [
    `<meta name="keywords" content="${keywords}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${desc}" />`,
    `<meta property="og:image" content="${DEFAULT_IMAGE}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="ru_RU" />`,
    `<meta property="og:site_name" content="Сервисный центр Прайм" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${desc}" />`,
    `<meta name="twitter:image" content="${DEFAULT_IMAGE}" />`,
    `<link rel="canonical" href="${url}" />`,
  ];

  if (meta.ldJson) {
    const safeJson = escapeJsonInScript(meta.ldJson);
    parts.push(
      `<script type="application/ld+json">${safeJson}</script>`
    );
  }

  return parts.join('\n    ');
}

function injectRouteMeta(html: string, meta: RouteMeta, routePath: string): string {
  const safeTitle = escapeHtml(meta.title);
  const safeDesc = escapeHtml(meta.description);

  let out = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${safeTitle}</title>`
  );
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${safeDesc}" />`
  );

  const seoBlock = buildSeoBlock(meta, routePath);
  out = out.replace('<!-- SEO_INJECT -->', seoBlock);

  return out;
}

export function vitePluginInjectSeo(): Plugin {
  let outDir = 'dist';

  return {
    name: 'vite-plugin-inject-seo',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const indexPath = path.resolve(outDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const baseHtml = fs.readFileSync(indexPath, 'utf-8');

      for (const [routePath, meta] of Object.entries(ROUTES_META)) {
        const html = injectRouteMeta(baseHtml, meta, routePath);
        const dir =
          routePath === '/'
            ? outDir
            : path.join(outDir, routePath.replace(/^\//, ''));
        const targetPath = path.join(dir, 'index.html');
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(targetPath, html, 'utf-8');
      }
    },
  };
}
