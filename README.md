# Prime — сайт сервисного центра

Публичный сайт сервисного центра Prime (Саранск): услуги, блог, заявки, админка статей блога. Фронтенд на React с раздачей через Vite.

## Требования

- **Node.js** 18+ (рекомендуется LTS)
- **npm**

## Быстрый старт

```bash
git clone <URL_репозитория>
cd prime-tech-fix
npm install
```

Создайте файл `.env` в корне (см. раздел «Переменные окружения»).

```bash
npm run dev
```

Сервер разработки: по умолчанию [http://localhost:8080](http://localhost:8080) (порт задан в `vite.config.ts`).

## Переменные окружения

| Переменная | Назначение |
|------------|------------|
| `VITE_BACKEND_URL` | URL бэкенда (API блога, формы и т.д.) |
| `VITE_RECAPTCHA_SITE_KEY` | Ключ reCAPTCHA v3 для клиента |

На этапе сборки для пре-рендера и RSS должен быть доступен бэкенд по `VITE_BACKEND_URL`, иначе список статей и RSS могут собраться пустыми.

## Скрипты npm

| Команда | Описание |
|---------|----------|
| `npm run dev` | Режим разработки (HMR) |
| `npm run build` | Продакшен-сборка SPA в `dist/` + RSS |
| `npm run build:static` | Статическая сборка с **пре-рендером** страниц в `dist/` (для хостинга без Node) |
| `npm run build:ssr` | Клиент в `dist/client/` + SSR-бандл в `dist/server/` |
| `npm run serve` | Запуск Express с SSR после `build:ssr` (порт из `PORT` или `4173`) |
| `npm run preview` | Локальный просмотр собранного `vite preview` |
| `npm run lint` | Проверка ESLint |

## SEO и деплой

- **Только статика** (Timeweb Apps и др. без Node): **обязательно** используйте **`npm run build:static`** — иначе в HTML попадёт только мета, а `<div id="root">` будет пустым и роботы не увидят текст страниц. В настройках деплоя укажите каталог **`dist`**, раздавайте файлы по путям (не редирект всех путей на index.html). Подробно: [docs/STATIC_DEPLOY.md](docs/STATIC_DEPLOY.md).
- **SSR на своём сервере**: `npm run build:ssr`, затем `npm run serve` за reverse-proxy (nginx и т.п.).

## Стек

- **Vite** 5  
- **React** 18, **TypeScript**  
- **React Router**  
- **Tailwind CSS**  
- **shadcn/ui** (Radix)  
- **TanStack Query**, **react-hook-form**, **Zod** (по месту использования)

## Структура (кратко)

- `src/` — приложение (страницы, компоненты, SEO-метаданные маршрутов)
- `server/server.js` — продакшен-сервер SSR
- `scripts/` — генерация RSS, пре-рендер, список URL
- `public/` — статика (`robots.txt`, фавиконки, манифест)

## Лицензия

Проект приватный; распространение определяется владельцем репозитория.
