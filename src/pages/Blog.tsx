import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight, Search, Calendar, Tag } from 'lucide-react';

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

interface BlogResponse {
  posts: BlogPost[];
  total: number;
  pages: number;
  current_page: number;
  has_next: boolean;
  has_prev: boolean;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [availableTags, setAvailableTags] = useState<string[]>([]);

  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  // Загрузка статей
  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        per_page: '6'
      });

      if (searchTerm) params.append('search', searchTerm);
      if (selectedTag && selectedTag !== 'all') params.append('tag', selectedTag);

      const response = await fetch(`${API_BASE_URL}/api/blog?${params}`);
      if (!response.ok) throw new Error('Failed to fetch posts');

      const data: BlogResponse = await response.json();
      setPosts(data.posts);
      setTotalPages(data.pages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchTerm, selectedTag, API_BASE_URL]);

  // Загрузка тегов
  const fetchTags = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blog/tags`);
      if (response.ok) {
        const data = await response.json();
        setAvailableTags(data.tags);
      }
    } catch (err) {
      console.error('Failed to fetch tags:', err);
    }
  }, [API_BASE_URL]);

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, [fetchPosts, fetchTags]);

  // Обработчики поиска и фильтрации
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('all');
    setCurrentPage(1);
  };

  // Форматирование даты
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Обрезка контента для превью
  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  if (loading && posts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Загружаем статьи...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Блог | Сервисный центр Prime - Полезные статьи о ремонте техники</title>
        <meta name='description' content='Читайте полезные статьи о ремонте техники, советы экспертов и новости сервисного центра Prime в Саранске. Профессиональные рекомендации по ремонту смартфонов, ноутбуков, бытовой техники.' />
        <meta name="keywords" content="блог, статьи, ремонт техники, советы, новости, Prime, сервисный центр, ремонт смартфонов, ремонт ноутбуков, ремонт бытовой техники, диагностика, гарантия, Саранск, Республика Мордовия, профессиональный ремонт, срочный ремонт, бесплатная диагностика, ремонт Apple, ремонт Samsung, ремонт Xiaomi, ремонт Huawei, ремонт Lenovo, ремонт Asus, ремонт HP, ремонт Acer, ремонт Sony, ремонт LG, ремонт компьютеров, апгрейд ПК, настройка техники, восстановление данных, ремонт мониторов, ремонт принтеров, ремонт сканеров, ремонт проекторов, ремонт колонок, ремонт наушников, ремонт микроволновок, ремонт холодильников, ремонт стиральных машин, ремонт пылесосов, ремонт кофемашин, ремонт электросамокатов, ремонт гироскутеров, ремонт электровелосипедов, ремонт электроскутеров, ремонт электроплит, ремонт варочных панелей, ремонт духовых шкафов, ремонт посудомоечных машин, ремонт телевизоров, ремонт ресиверов, ремонт роутеров, ремонт модемов, ремонт wi-fi, ремонт планшетов, ремонт телефонов, ремонт мобильных устройств, ремонт техники Саранск, ремонт техники Prime, ремонт техники недорого, ремонт техники с гарантией, ремонт техники быстро, ремонт техники качественно, ремонт техники отзывы, ремонт техники цены, ремонт техники адрес, ремонт техники телефон, ремонт техники онлайн заявка, ремонт техники консультация, ремонт техники выезд мастера, ремонт техники оригинальные запчасти, ремонт техники профессионалы, ремонт техники опытные мастера, ремонт техники диагностика бесплатно, ремонт техники гарантия, ремонт техники скидки, ремонт техники акции, ремонт техники Prime Саранск, ремонт техники сервисный центр Prime, ремонт техники официальный сервис, ремонт техники срочно" />
        {/* Open Graph для соцсетей */}
        <meta property="og:title" content="Блог | Сервисный центр Prime - Полезные статьи о ремонте техники" />
        <meta property="og:description" content="Читайте полезные статьи о ремонте техники, советы экспертов и новости сервисного центра Prime в Саранске. Профессиональные рекомендации по ремонту смартфонов, ноутбуков, бытовой техники." />
        <meta property="og:image" content="https://serviceprime13.ru/logos/company-logo.jpg" />
        <meta property="og:url" content="https://serviceprime13.ru/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Блог | Сервисный центр Prime - Полезные статьи о ремонте техники" />
        <meta name="twitter:description" content="Читайте полезные статьи о ремонте техники, советы экспертов и новости сервисного центра Prime в Саранске. Профессиональные рекомендации по ремонту смартфонов, ноутбуков, бытовой техники." />
        <meta name="twitter:image" content="https://serviceprime13.ru/logos/company-logo.jpg" />
        {/* Canonical */}
        <link rel="canonical" href="https://serviceprime13.ru/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Блог сервисного центра Prime",
            "description": "Полезные статьи о ремонте техники, советы экспертов и новости сервисного центра Prime в Саранске",
            "url": "https://serviceprime13.ru/blog",
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
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": posts.map((post, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "BlogPosting",
                  "headline": post.title,
                  "url": `https://serviceprime13.ru/blog/${post.slug}`,
                  "datePublished": post.created_at,
                  "dateModified": post.updated_at
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 pt-28">
        <div className="container mx-auto px-4">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Блог</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полезные статьи о ремонте техники, советы экспертов и новости нашей компании
            </p>
          </div>

          {/* Фильтры и поиск */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Поиск по статьям..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedTag} onValueChange={handleTagFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Все теги" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все теги</SelectItem>
                  {availableTags.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {(searchTerm || selectedTag !== 'all') && (
                <Button variant="outline" onClick={clearFilters}>
                  Очистить
                </Button>
              )}
            </div>
          </div>

          {/* Сообщение об ошибке */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {/* Список статей */}
          {posts.length === 0 && !loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Статьи не найдены</p>
              {(searchTerm || selectedTag !== 'all') && (
                <Button onClick={clearFilters} className="mt-4">
                  Показать все статьи
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  {post.image_url && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.created_at)}
                    </div>
                    <CardTitle className="text-xl line-clamp-2">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {truncateContent(post.content)}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Пагинация */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Назад
              </Button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  );
                })}
              </div>
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Вперёд
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog; 