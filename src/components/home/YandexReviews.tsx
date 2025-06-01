
import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface YandexReview {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

const YandexReviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // Моковые данные отзывов (в реальном проекте здесь будет API Яндекса)
  const reviews: YandexReview[] = [
    {
      id: 1,
      author: "Андрей К.",
      rating: 5,
      text: "Отличный сервис! Быстро и качественно отремонтировали мой iPhone. Мастера профессиональные, цены адекватные. Рекомендую всем!",
      date: "2024-01-15",
      service: "Ремонт iPhone"
    },
    {
      id: 2,
      author: "Мария С.",
      rating: 5,
      text: "Обратилась с проблемой ноутбука - перегревался и тормозил. Сделали чистку и замену термопасты за пару часов. Теперь работает как новый!",
      date: "2024-01-10",
      service: "Чистка ноутбука"
    },
    {
      id: 3,
      author: "Дмитрий П.",
      rating: 4,
      text: "Хороший сервисный центр. Заменили экран на планшете быстро и аккуратно. Единственный минус - немного дороговато, но качество того стоит.",
      date: "2024-01-08",
      service: "Замена экрана планшета"
    },
    {
      id: 4,
      author: "Елена В.",
      rating: 5,
      text: "Спасли мой утопленный телефон! Думала, что все, конец, но мастера творят чудеса. Через два дня телефон работал как ни в чем не бывало.",
      date: "2024-01-05",
      service: "Восстановление после воды"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Отзывы с Яндекса
          </span>
          <h2 className="heading-lg mb-4 text-gray-900">Что говорят наши клиенты</h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            Реальные отзывы клиентов о качестве наших услуг с Яндекс.Карт
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <Quote size={40} className="text-blue-200 mb-6" />
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{reviews[currentReview].author}</h4>
                  <p className="text-sm text-gray-500">{reviews[currentReview].service}</p>
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(reviews[currentReview].rating)}
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {reviews[currentReview].text}
              </p>
              
              <p className="text-sm text-gray-500">
                {new Date(reviews[currentReview].date).toLocaleDateString('ru-RU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={prevReview}
                className="rounded-full"
              >
                <ChevronLeft size={20} />
              </Button>

              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentReview ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextReview}
                className="rounded-full"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Хотите оставить свой отзыв? Найдите нас на Яндекс.Картах
            </p>
            <Button asChild className="bg-red-500 hover:bg-red-600">
              <a 
                href="https://yandex.ru/maps/org/prime_tech/123456789/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Оставить отзыв на Яндексе
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YandexReviews;
