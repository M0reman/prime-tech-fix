/**
 * Данные компании без импортов — безопасно для цепочки vite.config → vite-plugin-inject-seo → routesMeta.
 * Картинка для OG/Schema задаётся в seo/socialPreview и подмешивается в companyInfo.
 */
export const companyFacts = {
  name: 'Сервисный центр Прайм',
  address: {
    streetAddress: 'ул. Севастопольская, д. 56/2',
    addressLocality: 'Саранск',
    addressRegion: 'Республика Мордовия',
    postalCode: '430000',
    addressCountry: 'RU',
  },
  telephone: '+7-929-747-45-11',
  email: 'serviceprime@mail.ru',
  url: 'https://serviceprime13.ru/',
  openingHours: 'Mo-Fr 10:00-19:00, Sa 10:00-14:00',
  priceRange: '₽₽',
  ratingValue: '4.9',
  reviewCount: '100',
} as const;
