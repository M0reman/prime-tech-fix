import React from 'react';
import { cn } from '@/lib/utils';

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  /** Путь к PNG/JPEG в public. Рядом — одноимённый .webp после `npm run images:webp`. */
  fallbackSrc: string;
  alt: string;
  /** Чтобы задать размеры контейнеру (например block h-full w-full для object-contain в фиксированной ячейке). */
  pictureClassName?: string;
};

/**
 * WebP с откатом на оригинал. Для public/brands-img при `npm run images:webp` WebP создаётся всегда (см. скрипт), иначе &lt;picture&gt; может ссылаться на отсутствующий .webp.
 */
export function RasterPicture({
  fallbackSrc,
  alt,
  className,
  pictureClassName,
  ...imgProps
}: Props) {
  const webpSrc = fallbackSrc.replace(/\.(png|jpe?g)$/i, '.webp');
  return (
    <picture className={cn(pictureClassName)}>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={fallbackSrc} alt={alt} className={cn(className)} {...imgProps} />
    </picture>
  );
}
