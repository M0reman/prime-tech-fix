/** Согласие на cookie / аналитику (localStorage). */
export const COOKIE_CONSENT_STORAGE_KEY = 'prime-tech-cookie-consent-v1';

/** Событие после записи выбора — чтобы сместить нижние fixed-баннеры (например UrgencyBanner). */
export const COOKIE_CONSENT_CHANGED_EVENT = 'prime-cookie-consent-changed';

export function notifyCookieConsentChanged(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED_EVENT));
}

export type CookieConsentChoice = 'analytics' | 'essential';

export function readCookieConsent(): CookieConsentChoice | null {
  if (typeof window === 'undefined') return null;
  try {
    const v = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (v === 'analytics' || v === 'essential') return v;
  } catch {
    return null;
  }
  return null;
}

export function writeCookieConsent(choice: CookieConsentChoice): void {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
  } catch {
    /* ignore */
  }
}
