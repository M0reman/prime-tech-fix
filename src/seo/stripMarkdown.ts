/**
 * Преобразует фрагмент Markdown в простой текст для meta description и JSON-LD.
 * Убирает разметку (** , ##, ссылки и т.д.), чтобы роботы видели читаемый текст.
 */
export function stripMarkdownForMeta(text: string, maxLength: number = 160): string {
  if (!text || typeof text !== 'string') return '';
  let plain = text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/#{1,6}\s*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  if (plain.length > maxLength) {
    plain = plain.slice(0, maxLength).replace(/\s+\S*$/, '');
  }
  return plain;
}
