
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import Testimonials from '@/components/home/Testimonials';
import ContactCard from '@/components/common/ContactCard';
import { Shield, Clock, Settings, Award } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Почему PRIME TECH
            </span>
            <h2 className="heading-lg mb-4">Премиальное качество обслуживания</h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Мы стремимся к совершенству в ремонте вашей техники и уделяем внимание каждой детали
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Гарантия качества</h3>
              <p className="text-muted-foreground">
                Мы предоставляем гарантию до 12 месяцев на все выполненные работы и заменённые детали
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Быстрый ремонт</h3>
              <p className="text-muted-foreground">
                Многие виды ремонта мы выполняем в течение 1-2 часов при вас или в течение 1-3 дней
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Settings size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Профессионализм</h3>
              <p className="text-muted-foreground">
                Наши мастера имеют многолетний опыт и постоянно повышают свою квалификацию
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Оригинальные запчасти</h3>
              <p className="text-muted-foreground">
                Используем только качественные комплектующие с проверенных поставщиков
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ServiceCards />
      
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Как мы работаем
            </span>
            <h2 className="heading-lg mb-4">Всего 4 шага до решения вашей проблемы</h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Простой и прозрачный процесс работы для вашего удобства
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-background rounded-xl p-6 border border-border shadow-sm h-full">
                <div className="text-4xl font-bold text-primary/20 absolute right-4 top-4">01</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Заявка</h3>
                <p className="text-muted-foreground">
                  Оставьте заявку на сайте или позвоните нам по телефону для консультации
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-2 bg-primary/10 transform translate-x-6" />
            </div>
            
            <div className="relative">
              <div className="bg-background rounded-xl p-6 border border-border shadow-sm h-full">
                <div className="text-4xl font-bold text-primary/20 absolute right-4 top-4">02</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Диагностика</h3>
                <p className="text-muted-foreground">
                  Проводим бесплатную диагностику и определяем точную причину неисправности
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-2 bg-primary/10 transform translate-x-6" />
            </div>
            
            <div className="relative">
              <div className="bg-background rounded-xl p-6 border border-border shadow-sm h-full">
                <div className="text-4xl font-bold text-primary/20 absolute right-4 top-4">03</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Ремонт</h3>
                <p className="text-muted-foreground">
                  Выполняем ремонт, используя профессиональное оборудование и качественные запчасти
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-2 bg-primary/10 transform translate-x-6" />
            </div>
            
            <div className="relative">
              <div className="bg-background rounded-xl p-6 border border-border shadow-sm h-full">
                <div className="text-4xl font-bold text-primary/20 absolute right-4 top-4">04</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Готово</h3>
                <p className="text-muted-foreground">
                  Проверяем работоспособность техники и выдаем гарантийный талон на выполненные работы
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section className="py-20">
        <div className="container px-4">
          <ContactCard />
        </div>
      </section>
    </div>
  );
};

export default Index;
