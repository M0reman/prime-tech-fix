import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "ремонт техники, сервисный центр, ремонт смартфонов, ремонт ноутбуков, ремонт планшетов, ремонт телевизоров, ремонт бытовой техники, диагностика, гарантия, Саранск, Прайм, ремонт Apple, ремонт Samsung, ремонт Xiaomi, ремонт Huawei, ремонт Lenovo, ремонт Asus, ремонт HP, ремонт Acer, профессиональный ремонт, срочный ремонт, бесплатная диагностика, оригинальные запчасти",
  image = "https://serviceprime13.ru/logos/company-logo.jpg",
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags = [],
  noindex = false
}) => {
  const fullTitle = title.includes('Прайм') ? title : `${title} | Сервисный центр Прайм`;
  const fullUrl = url ? `https://serviceprime13.ru${url}` : 'https://serviceprime13.ru';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="Сервисный центр Прайм" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Additional meta tags */}
      <meta name="author" content="Сервисный центр Прайм" />
      <meta name="language" content="ru" />
      <meta name="geo.region" content="RU-MO" />
      <meta name="geo.placename" content="Саранск" />
      <meta name="geo.position" content="54.1838;45.1749" />
      <meta name="ICBM" content="54.1838, 45.1749" />
    </Helmet>
  );
};

export default SEOHead; 