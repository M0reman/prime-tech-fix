import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import type { BlogPostPreload } from './contexts/PreloadContext';
import { ROUTES_META, getCanonicalUrl, DEFAULT_IMAGE } from './seo/routesMeta';
import { stripMarkdownForMeta } from './seo/stripMarkdown';

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

  if (parts[0] === 'blog' && parts.length > 1) {
    itemListElement.push(
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Блог',
        item: `${BASE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cleanTitle,
        item: `${BASE_URL}${pathname}`,
      },
    );
  } else {
    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: cleanTitle,
      item: `${BASE_URL}${pathname}`,
    });
  }

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
  preloadedState: { blogPost: BlogPostPreload | null } | null;
}

export interface RenderOptions {
  url: string;
  preloadedBlogPost?: BlogPostPreload | null;
}

export function render(options: RenderOptions): RenderResult {
  const { url, preloadedBlogPost = null } = options;
  const pathname = new URL(url, BASE_URL).pathname;

  // StaticRouter ожидает pathname (например /blog/article), а не полный URL
  const appHtml = renderToString(
    <StaticRouter location={pathname}>
      <App preloadedBlogPost={preloadedBlogPost} />
    </StaticRouter>
  );
  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  let title = 'Сервисный центр Прайм';
  let description = 'Ремонт бытовой и цифровой техники в Саранске.';
  let metaTags = '';
  let linkTags = '';

  if (blogMatch && preloadedBlogPost) {
    const post = preloadedBlogPost;
    const descPlain = stripMarkdownForMeta(post.content, 160);
    const desc = descPlain ? `${descPlain}...` : '';
    title = `${escapeHtml(post.title)} | Сервисный центр Прайм - Ремонт техники в Саранске`;
    description = desc ? `${desc} Сервисный центр Прайм в Саранске - профессиональный ремонт техники с гарантией.` : 'Сервисный центр Прайм в Саранске - профессиональный ремонт техники с гарантией.';
    const canonical = `${BASE_URL}/blog/${post.slug}`;
    const image = post.image_url || DEFAULT_IMAGE;
    const keywords = post.tags.join(', ') + ', ремонт техники, сервисный центр, Прайм, Саранск';

    // description и title подставляются в шаблон через replace в server.js/prerender.js, в metaTags не дублируем
    metaTags = [
      `<meta name="keywords" content="${escapeHtml(keywords)}" />`,
      `<meta property="og:title" content="${escapeHtml(post.title)} | Сервисный центр Прайм" />`,
      `<meta property="og:description" content="${escapeHtml(description)}" />`,
      `<meta property="og:image" content="${escapeHtml(image)}" />`,
      `<meta property="og:url" content="${canonical}" />`,
      `<meta property="og:type" content="article" />`,
      `<meta property="og:locale" content="ru_RU" />`,
      `<meta property="og:site_name" content="Сервисный центр Прайм" />`,
      `<meta property="article:published_time" content="${post.created_at}" />`,
      `<meta property="article:modified_time" content="${post.updated_at}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${escapeHtml(post.title)} | Сервисный центр Прайм" />`,
      `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
      `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    ].join('\n    ');

    linkTags = `<link rel="canonical" href="${canonical}" />`;

    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: desc ? `${desc} Сервисный центр Прайм в Саранске.` : 'Сервисный центр Прайм в Саранске - профессиональный ремонт техники.',
      image: image,
      author: { '@type': 'Organization', name: 'Сервисный центр Прайм', url: BASE_URL },
      publisher: { '@type': 'Organization', name: 'Сервисный центр Прайм', url: BASE_URL, logo: { '@type': 'ImageObject', url: DEFAULT_IMAGE } },
      datePublished: post.created_at,
      dateModified: post.updated_at,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      keywords: post.tags.join(', '),
      articleSection: 'Ремонт техники',
      inLanguage: 'ru-RU',
    };
    metaTags += `\n    <script type="application/ld+json">${escapeJsonInScript(JSON.stringify(ldJson))}</script>`;

    const breadcrumbLd = buildBreadcrumbLd(pathname, post.title);
    if (breadcrumbLd) {
      metaTags += `\n    <script type="application/ld+json">${escapeJsonInScript(breadcrumbLd)}</script>`;
    }
  } else {
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
      `<meta property="og:image" content="${DEFAULT_IMAGE}" />`,
      `<meta property="og:url" content="${canonical}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:locale" content="ru_RU" />`,
      `<meta property="og:site_name" content="Сервисный центр Прайм" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
      `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
      `<meta name="twitter:image" content="${DEFAULT_IMAGE}" />`,
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
  }

  return {
    html: appHtml,
    title,
    description,
    metaTags,
    linkTags,
    preloadedState: preloadedBlogPost ? { blogPost: preloadedBlogPost } : null,
  };
}
