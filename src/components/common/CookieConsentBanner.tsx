import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  COOKIE_CONSENT_STORAGE_KEY,
  notifyCookieConsentChanged,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentChoice,
} from '@/constants/cookieConsent';
import { initYandexMetrikaIfConsented } from '@/lib/yandexMetrika';

/**
 * Плашка согласия на cookie: после выбора — запись в localStorage и условная загрузка Метрики.
 */
const CookieConsentBanner: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(readCookieConsent() === null);
  }, []);

  const choose = (choice: CookieConsentChoice) => {
    writeCookieConsent(choice);
    setOpen(false);
    notifyCookieConsentChanged();
    if (choice === 'analytics') {
      initYandexMetrikaIfConsented();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-card/95 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-card/80"
      role="dialog"
      aria-label="Согласие на использование cookie"
    >
      <div className="container mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-foreground">
          Мы используем файлы cookie для работы сайта и, если вы нажмёте «Хорошо», — для аналитики (Яндекс.Метрика).
          Кнопка «Только необходимые» отключает аналитические скрипты. Подробнее — в{' '}
          <Link to="/privacy" className="text-primary underline">
            политике в отношении персональных данных и cookie
          </Link>
          . Ключ записи выбора: <code className="rounded bg-muted px-1 text-xs">{COOKIE_CONSENT_STORAGE_KEY}</code>
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button type="button" size="sm" onClick={() => choose('essential')}>
            Только необходимые
          </Button>
          <Button type="button" size="sm" variant="default" onClick={() => choose('analytics')}>
            Хорошо
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
