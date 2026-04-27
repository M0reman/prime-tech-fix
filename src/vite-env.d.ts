/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL?: string;
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
  /** Включить вебвизор Метрики (только при согласии на аналитику). По умолчанию выключено. */
  readonly VITE_METRIKA_WEBVISOR?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
