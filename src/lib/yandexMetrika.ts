import { YANDEX_METRIKA_COUNTER_ID } from '@/constants/privacyLegal';

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
    __primeMetrikaInitialized?: boolean;
  }
}

const DEFAULT_METRIKA_TAG_URLS = [
  'https://mc.yandex.ru/metrika/tag.js',
  'https://mc.yandex.com/metrika/tag.js',
];

function parseMetrikaTagUrls(): string[] {
  const raw = import.meta.env.VITE_METRIKA_TAG_URLS;
  if (!raw) return DEFAULT_METRIKA_TAG_URLS;
  return raw
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function loadScriptByUrls(urls: string[], onLoaded: () => void, onFailed: () => void): void {
  const tryLoad = (index: number) => {
    if (index >= urls.length) {
      onFailed();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = urls[index];
    script.onload = () => onLoaded();
    script.onerror = () => {
      script.remove();
      tryLoad(index + 1);
    };
    document.head.appendChild(script);
  };

  tryLoad(0);
}

/**
 * Инициализирует Яндекс.Метрику один раз при открытии сайта.
 * Webvisor включается через VITE_METRIKA_WEBVISOR=true.
 */
export function initYandexMetrikaIfConsented(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__primeMetrikaInitialized) return;
  window.__primeMetrikaInitialized = true;

  const webvisor = import.meta.env.VITE_METRIKA_WEBVISOR !== 'false';

  const runInit = () => {
    if (typeof window.ym !== 'function') {
      window.__primeMetrikaInitialized = false;
      return;
    }
    window.ym(YANDEX_METRIKA_COUNTER_ID, 'init', {
      webvisor,
      clickmap: true,
      referrer: document.referrer,
      url: location.href,
      accurateTrackBounce: true,
      trackLinks: true,
    });
  };

  loadScriptByUrls(parseMetrikaTagUrls(), runInit, () => {
    window.__primeMetrikaInitialized = false;
  });
}
