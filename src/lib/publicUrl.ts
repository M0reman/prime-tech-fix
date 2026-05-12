/**
 * Абсолютный URL для файлов из `public/` (путь с ведущим `/`).
 * В production `import.meta.env.BASE_URL` = полный origin сайта — нужно для Яндекс.Вебвизора:
 * при воспроизведении origin не ваш домен, относительные пути картинок не загружаются.
 */
export function publicUrl(path: string): string {
  if (!path) return path;
  const trimmed = path.trim();
  if (
    trimmed.startsWith('http:') ||
    trimmed.startsWith('https:') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('blob:') ||
    trimmed.startsWith('//')
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL;
  if (!base || base === '/') {
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  try {
    return new URL(trimmed.replace(/^\//, ''), base).href;
  } catch {
    return path;
  }
}
