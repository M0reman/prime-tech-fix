import React from 'react';
import {
  SOCIAL_DEFAULT_IMAGE_ALT,
  mimeTypeForImageUrl,
} from '@/seo/socialPreview';

/**
 * Теги для <Helmet>: нельзя оборачивать их в кастомный React-компонент — react-helmet-async
 * требует прямых потомков title/meta/link/script (иначе invariant «nested Helmet»).
 */
export function buildSocialPreviewHelmetMeta(
  imageUrl: string,
  imageAlt?: string
): React.ReactElement[] {
  const alt = imageAlt ?? SOCIAL_DEFAULT_IMAGE_ALT;
  const mime = mimeTypeForImageUrl(imageUrl);
  const tags: React.ReactElement[] = [
    <meta key="og:image" property="og:image" content={imageUrl} />,
  ];
  if (imageUrl.startsWith('https://')) {
    tags.push(
      <meta
        key="og:image:secure_url"
        property="og:image:secure_url"
        content={imageUrl}
      />
    );
  }
  if (mime) {
    tags.push(
      <meta key="og:image:type" property="og:image:type" content={mime} />
    );
  }
  tags.push(
    <meta key="og:image:alt" property="og:image:alt" content={alt} />,
    <meta key="twitter:image" name="twitter:image" content={imageUrl} />
  );
  return tags;
}
