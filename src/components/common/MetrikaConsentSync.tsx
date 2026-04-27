import { useEffect } from 'react';
import { initYandexMetrikaIfConsented } from '@/lib/yandexMetrika';

/** При гидрации: если пользователь уже согласился на аналитику — подключаем Метрику. */
export default function MetrikaConsentSync() {
  useEffect(() => {
    initYandexMetrikaIfConsented();
  }, []);
  return null;
}
