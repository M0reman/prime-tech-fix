/**
 * График приёма заявок и звонков (локальное время пользователя).
 * Совпадает с указанием на сайте: Пн–Пт 10:00–19:00, Сб 10:00–14:00, Вс — выходной.
 */
export const BUSINESS_HOURS_SUMMARY = 'Пн–Пт 10:00–19:00, Сб 10:00–14:00';

export function isWithinBusinessHours(now: Date = new Date()): boolean {
  const day = now.getDay();
  const minutesFromMidnight = now.getHours() * 60 + now.getMinutes();
  if (day === 0) return false;
  if (day >= 1 && day <= 5) {
    return minutesFromMidnight >= 10 * 60 && minutesFromMidnight < 19 * 60;
  }
  if (day === 6) {
    return minutesFromMidnight >= 10 * 60 && minutesFromMidnight < 14 * 60;
  }
  return false;
}

/** Текст для тоста и модалки после отправки заявки с формы контактов. */
export function getContactFormFollowupMessage(now: Date = new Date()): string {
  if (isWithinBusinessHours(now)) {
    return 'Наш специалист перезвонит вам в течение 15 минут.';
  }
  return `Мы свяжемся с вами в рабочее время (${BUSINESS_HOURS_SUMMARY}).`;
}
