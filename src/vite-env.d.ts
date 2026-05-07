/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL?: string;
  /** Включить вебвизор Метрики. По умолчанию включено, отключение: false. */
  readonly VITE_METRIKA_WEBVISOR?: string;
  /** Список URL скрипта Метрики через запятую для fallback. */
  readonly VITE_METRIKA_TAG_URLS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
