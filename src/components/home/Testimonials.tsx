
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  service: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Александр С.",
      service: "Ремонт iPhone 12",
      rating: 5,
      date: "15.05.2023",
      text: "Разбил экран на iPhone, обратился в PRIME TECH. Приятно удивила скорость и качество работы. Мастер заменил дисплей за 1 час, телефон выглядит как новый. Цена абсолютно адекватная. Рекомендую!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Екатерина М.",
      service: "Ремонт ноутбука ASUS",
      rating: 5,
      date: "03.06.2023",
      text: "Ноутбук перестал включаться после 5 лет использования. В PRIME TECH быстро диагностировали проблему, заменили жесткий диск и почистили от пыли. Теперь работает даже лучше, чем раньше. Спасибо за профессиональный подход!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Михаил В.",
      service: "Ремонт стиральной машины",
      rating: 4,
      date: "22.07.2023",
      text: "Вызвал мастера на дом для ремонта стиральной машины. Приехал в тот же день, быстро нашел причину поломки и устранил ее. Дал рекомендации по дальнейшей эксплуатации. Сервис на высоте.",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    {
      id: 4,
      name: "Ольга К.",
      service: "Ремонт iPad Pro",
      rating: 5,
      date: "18.08.2023",
      text: "Обратилась с проблемой зарядки iPad. Диагностику провели бесплатно, выявили проблему в разъеме Lightning. Замена заняла меньше часа, все работает отлично. Очень довольна обслуживанием и профессионализмом сотрудников.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 5,
      name: "Дмитрий П.",
      service: "Ремонт телевизора Samsung",
      rating: 5,
      date: "05.09.2023",
      text: "Телевизор перестал показывать изображение. Мастер из PRIME TECH диагностировал неисправность в блоке питания. Отремонтировали за 2 дня, стоимость оказалась вдвое меньше, чем предлагали в других сервисах. Спасибо за честность и высокое качество!",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const next = () => {
    if (animating) return;
    setAnimating(true);
    const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    setTimeout(() => setAnimating(false), 500);
  };
  
  const previous = () => {
    if (animating) return;
    setAnimating(true);
    const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Отзывы клиентов
          </span>
          <h2 className="heading-lg mb-4 text-gray-900">Что говорят о нас наши клиенты</h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            Мы ценим каждого клиента и стремимся обеспечить максимальное качество услуг
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 ease-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-6 py-8"
                >
                  <div className="bg-white rounded-xl p-8 shadow-sm border testimonial-card">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        {testimonial.avatar && (
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.service}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            fill={i < testimonial.rating ? "currentColor" : "none"} 
                            className={cn(i < testimonial.rating ? "text-amber-400" : "text-gray-300")}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mb-4 text-gray-700">{testimonial.text}</p>
                    <div className="text-sm text-gray-500">{testimonial.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <ChevronLeft size={20} />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 p-0 rounded-full",
                  index === activeIndex ? "bg-blue-600" : "bg-blue-200"
                )}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
