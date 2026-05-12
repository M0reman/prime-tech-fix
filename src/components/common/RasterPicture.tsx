import React from 'react';
import { cn } from '@/lib/utils';
import { publicUrl } from '@/lib/publicUrl';

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
  const webpSrc = publicUrl(fallbackSrc.replace(/\.(png|jpe?g)$/i, '.webp'));
  const rasterSrc = publicUrl(fallbackSrc);
  return (
    <picture className={cn(pictureClassName)}>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={rasterSrc} alt={alt} className={cn(className)} {...imgProps} />
    </picture>
  );
}
