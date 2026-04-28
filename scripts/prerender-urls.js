#!/usr/bin/env node
/**
 * Вариант B (статический хостинг): список URL для пре-рендера.
 * Используется при сборке для генерации статических HTML по каждому URL.
 * Запуск: node scripts/prerender-urls.js
 * Выводит JSON-массив URL в stdout.
 */
const STATIC_ROUTES = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/privacy',
  '/faq',
  '/brands',
  '/remont-televizorov',
];

function main() {
  process.stdout.write(JSON.stringify(STATIC_ROUTES));
}

main();
