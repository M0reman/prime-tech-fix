/**
 * Превью ссылок (Telegram, VK и др.): Open Graph читает эти поля из HTML.
 * PNG/JPEG для og:image — максимальная совместимость; WebP часто не подхватывается ботами.
 * Файл лежит в public/logos (не ссылаться на несуществующий .jpg).
 */
export const SOCIAL_DEFAULT_IMAGE_URL = 'https://serviceprime13.ru/logos/company-logo-square.png';

export const SOCIAL_DEFAULT_IMAGE_ALT =
  'Сервисный центр Прайм — ремонт телефонов, ноутбуков и телевизоров в Саранске';

export const SOCIAL_SITE_NAME = 'Сервисный центр Прайм';

/** MIME по расширению URL (для og:image:type). */
export function mimeTypeForImageUrl(url: string): string | null {
  const lower = url.split('?')[0].toLowerCase();
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.gif')) return 'image/gif';
  return null;
}

/** Строки meta для og:image (+ secure_url, type, alt) для SSR и статического инжекта. */
export function ogImageMetaLines(
  imageUrl: string,
  imageAlt: string,
  escapeHtml: (s: string) => string
): string[] {
  const lines: string[] = [
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
  ];
  if (imageUrl.startsWith('https://')) {
    lines.push(
      `<meta property="og:image:secure_url" content="${escapeHtml(imageUrl)}" />`
    );
  }
  const mime = mimeTypeForImageUrl(imageUrl);
  if (mime) {
    lines.push(`<meta property="og:image:type" content="${escapeHtml(mime)}" />`);
  }
  lines.push(`<meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />`);
  return lines;
}
