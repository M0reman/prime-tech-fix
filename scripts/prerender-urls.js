#!/usr/bin/env node
/**
 * Вариант B (статический хостинг): список URL для пре-рендера.
 * Используется при сборке для генерации статических HTML по каждому URL.
 * Запуск: node scripts/prerender-urls.js
 * Выводит JSON-массив URL в stdout.
 */
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_BASE_URL = process.env.VITE_BACKEND_URL || 'http://localhost:5000';

const STATIC_ROUTES = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/faq',
  '/brands',
  '/blog',
  '/remont-televizorov',
];

async function getBlogSlugs() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blog?per_page=1000`);
    if (response.ok) {
      const data = await response.json();
      return (data.posts || []).map((p) => `/blog/${p.slug}`);
    }
  } catch (err) {
    console.error('prerender-urls: не удалось загрузить список статей блога:', err?.message);
  }
  return [];
}

async function main() {
  const blogRoutes = await getBlogSlugs();
  const urls = [...STATIC_ROUTES, ...blogRoutes];
  process.stdout.write(JSON.stringify(urls));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
