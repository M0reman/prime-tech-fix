import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Tag, Share2, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url?: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  // Загрузка статьи
  const fetchPost = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/blog/${slug}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Статья не найдена');
        }
        throw new Error('Ошибка загрузки статьи');
      }

      const data: BlogPost = await response.json();
      setPost(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setLoading(false);
    }
  }, [slug, API_BASE_URL]);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug, fetchPost]);

  // Форматирование даты
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Время чтения (примерная оценка)
  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  // Поделиться статьёй
  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title || 'Статья',
        text: post?.content.substring(0, 100) + '...',
        url: window.location.href
      });
    } else {
      // Fallback: копирование ссылки
      navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована в буфер обмена!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Загружаем статью...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Ошибка</h1>
            <p className="text-gray-600 mb-6">{error || 'Статья не найдена'}</p>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Вернуться к блогу
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Сервисный центр Prime - Ремонт техники в Саранске</title>
        <meta name='description' content={`${post.content.substring(0, 160)}... Сервисный центр Prime в Саранске - профессиональный ремонт техники с гарантией. Диагностика бесплатно.`} />
        <meta name="keywords" content={`${post.tags.join(', ')}, ремонт техники, сервисный центр, Prime, Саранск, Республика Мордовия, диагностика, гарантия, профессиональный ремонт, срочный ремонт, бесплатная диагностика, ремонт смартфонов, ремонт ноутбуков, ремонт бытовой техники, ремонт Apple, ремонт Samsung, ремонт Xiaomi, ремонт Huawei, ремонт Lenovo, ремонт Asus, ремонт HP, ремонт Acer, ремонт Sony, ремонт LG, ремонт компьютеров, апгрейд ПК, настройка техники, восстановление данных, ремонт мониторов, ремонт принтеров, ремонт сканеров, ремонт проекторов, ремонт колонок, ремонт наушников, ремонт микроволновок, ремонт холодильников, ремонт стиральных машин, ремонт пылесосов, ремонт кофемашин, ремонт электросамокатов, ремонт гироскутеров, ремонт электровелосипедов, ремонт электроскутеров, ремонт электроплит, ремонт варочных панелей, ремонт духовых шкафов, ремонт посудомоечных машин, ремонт телевизоров, ремонт ресиверов, ремонт роутеров, ремонт модемов, ремонт wi-fi, ремонт планшетов, ремонт телефонов, ремонт мобильных устройств, ремонт техники Саранск, ремонт техники Prime, ремонт техники недорого, ремонт техники с гарантией, ремонт техники быстро, ремонт техники качественно, ремонт техники отзывы, ремонт техники цены, ремонт техники адрес, ремонт техники телефон, ремонт техники онлайн заявка, ремонт техники консультация, ремонт техники выезд мастера, ремонт техники оригинальные запчасти, ремонт техники профессионалы, ремонт техники опытные мастера, ремонт техники диагностика бесплатно, ремонт техники гарантия, ремонт техники скидки, ремонт техники акции, ремонт техники Prime Саранск, ремонт техники сервисный центр Prime, ремонт техники официальный сервис, ремонт техники срочно`} />
        {/* Open Graph для соцсетей */}
        <meta property="og:title" content={`${post.title} | Сервисный центр Prime`} />
        <meta property="og:description" content={`${post.content.substring(0, 160)}... Сервисный центр Prime в Саранске - профессиональный ремонт техники с гарантией.`} />
        <meta property="og:image" content={post.image_url || "https://serviceprime13.ru/logos/company-logo.jpg"} />
        <meta property="og:url" content={`https://serviceprime13.ru/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="article:published_time" content={post.created_at} />
        <meta property="article:modified_time" content={post.updated_at} />
        {post.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Сервисный центр Prime`} />
        <meta name="twitter:description" content={`${post.content.substring(0, 160)}... Сервисный центр Prime в Саранске - профессиональный ремонт техники с гарантией.`} />
        <meta name="twitter:image" content={post.image_url || "https://serviceprime13.ru/logos/company-logo.jpg"} />
        {/* Canonical */}
        <link rel="canonical" href={`https://serviceprime13.ru/blog/${post.slug}`} />
        {/* JSON-LD Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.content.substring(0, 160) + '...',
            "image": post.image_url || "https://serviceprime13.ru/logos/company-logo.jpg",
            "author": {
              "@type": "Organization",
              "name": "Сервисный центр Prime",
              "url": "https://serviceprime13.ru",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Саранск",
                "addressRegion": "Республика Мордовия",
                "addressCountry": "RU"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Сервисный центр Prime",
              "url": "https://serviceprime13.ru",
              "logo": {
                "@type": "ImageObject",
                "url": "https://serviceprime13.ru/logos/company-logo.jpg"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Саранск",
                "addressRegion": "Республика Мордовия",
                "addressCountry": "RU"
              }
            },
            "datePublished": post.created_at,
            "dateModified": post.updated_at,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://serviceprime13.ru/blog/${post.slug}`
            },
            "keywords": post.tags.join(', '),
            "articleSection": "Ремонт техники",
            "inLanguage": "ru-RU"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 pt-28">
        <div className="container mx-auto px-4">
          {/* Навигация */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Вернуться к блогу
            </Button>
          </div>

          {/* Основной контент */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              {/* Изображение */}
              {post.image_url && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <CardContent className="p-8">
                {/* Заголовок */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>

                {/* Мета-информация */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.created_at)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {getReadingTime(post.content)} мин чтения
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={sharePost}
                    className="flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    Поделиться
                  </Button>
                </div>

                {/* Теги */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Контент статьи */}
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Разделитель */}
                <hr className="my-8 border-gray-200" />

                {/* Навигация между статьями */}
                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/blog')}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Все статьи
                  </Button>
                  
                  <Button
                    variant="ghost"
                    onClick={sharePost}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Поделиться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost; 