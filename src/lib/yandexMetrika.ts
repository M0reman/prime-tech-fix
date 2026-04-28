import { readCookieConsent } from '@/constants/cookieConsent';
import { YANDEX_METRIKA_COUNTER_ID } from '@/constants/privacyLegal';

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
    __primeMetrikaInitialized?: boolean;
  }
}

/**
 * Инициализирует Яндекс.Метрику один раз, только при сохранённом согласии «с аналитикой».
 * Webvisor включается через VITE_METRIKA_WEBVISOR=true.
 */
export function initYandexMetrikaIfConsented(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (readCookieConsent() !== 'analytics') return;
  if (window.__primeMetrikaInitialized) return;
  window.__primeMetrikaInitialized = true;

  const bootstrap = document.createElement('script');
  bootstrap.textContent =
    '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");';
  document.head.appendChild(bootstrap);
  bootstrap.remove();

  const webvisor = import.meta.env.VITE_METRIKA_WEBVISOR === 'true';

  const runInit = () => {
    if (typeof window.ym !== 'function') {
      window.setTimeout(runInit, 40);
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
  runInit();
}
