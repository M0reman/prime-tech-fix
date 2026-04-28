import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { ROUTES_META, getCanonicalUrl, DEFAULT_IMAGE } from './seo/routesMeta';
import {
  SOCIAL_DEFAULT_IMAGE_ALT,
  ogImageMetaLines,
} from './seo/socialPreview';

const SSR_OUTLET = '<!--ssr-outlet-->';
const BASE_URL = 'https://serviceprime13.ru';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJsonInScript(json: string): string {
  return json.replace(/<\/script>/gi, '<\\/script>');
}

function buildBreadcrumbLd(pathname: string, currentTitle: string): string | null {
  if (pathname === '/404') return null;

  const cleanTitle = currentTitle.split('|')[0]?.trim() || currentTitle.trim();
  const parts = pathname.split('/').filter(Boolean);
  const itemListElement: Array<{ '@type': 'ListItem'; position: number; name: string; item: string }> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Главная',
      item: `${BASE_URL}/`,
    },
  ];

  if (parts.length === 0) {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement,
    });
  }

  itemListElement.push({
    '@type': 'ListItem',
    position: 2,
    name: cleanTitle,
    item: `${BASE_URL}${pathname}`,
  });

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  });
}

export interface RenderResult {
  html: string;
  title: string;
  description: string;
  metaTags: string;
  linkTags: string;
  preloadedState: null;
}

export interface RenderOptions {
  url: string;
}

export function render(options: RenderOptions): RenderResult {
  const { url } = options;
  const pathname = new URL(url, BASE_URL).pathname;

  // StaticRouter ожидает pathname, а не полный URL
  const appHtml = renderToString(
    <StaticRouter location={pathname}>
      <App />
    </StaticRouter>
  );
  let title = 'Сервисный центр Прайм';
  let description = 'Ремонт бытовой и цифровой техники в Саранске.';
  let metaTags = '';
  let linkTags = '';
  const is404 = !(pathname in ROUTES_META);
  const routeMeta = ROUTES_META[pathname] ?? (is404 ? {
    title: '404 - Страница не найдена | Сервисный центр Прайм',
    description: 'Запрашиваемая страница не найдена. Вернитесь на главную страницу сервисного центра Прайм в Саранске.',
    keywords: '',
  } : ROUTES_META['/']);
  title = routeMeta.title;
  description = routeMeta.description;
  const canonical = getCanonicalUrl(pathname);

  // description и title подставляются в шаблон через replace в server.js/prerender.js, в metaTags не дублируем
  metaTags = [
    ...(routeMeta.keywords ? [`<meta name="keywords" content="${escapeHtml(routeMeta.keywords)}" />`] : []),
    ...(is404 ? ['<meta name="robots" content="noindex, nofollow" />'] : []),
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    ...ogImageMetaLines(DEFAULT_IMAGE, SOCIAL_DEFAULT_IMAGE_ALT, escapeHtml),
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="ru_RU" />`,
    `<meta property="og:site_name" content="Сервисный центр Прайм" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(DEFAULT_IMAGE)}" />`,
  ].join('\n    ');

  linkTags = `<link rel="canonical" href="${canonical}" />`;

  if (routeMeta.ldJson) {
    metaTags += `\n    <script type="application/ld+json">${escapeJsonInScript(routeMeta.ldJson)}</script>`;
  }

  if (!is404) {
    const breadcrumbLd = buildBreadcrumbLd(pathname, title);
    if (breadcrumbLd) {
      metaTags += `\n    <script type="application/ld+json">${escapeJsonInScript(breadcrumbLd)}</script>`;
    }
  }

  return {
    html: appHtml,
    title,
    description,
    metaTags,
    linkTags,
    preloadedState: null,
  };
}
