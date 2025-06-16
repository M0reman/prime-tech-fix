
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ContactCard from '@/components/common/ContactCard';
import { ShieldCheck, Users, Trophy, Clock } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              О компании
            </span>
            <h1 className="heading-lg mb-4">Сервисный центр PRIME</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Надежный партнер в электрическом ремонте и обслуживании любой цифровой и бытовой техники
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h2 className="heading-md mb-4">Наша миссия</h2>
              <p className="body-md mb-4">
                PRIME — это современный сервисный центр, специализирующийся на электрическом ремонте цифровой и бытовой техники. 
                Мы начали свою деятельность в 2018 году и за это время завоевали доверие тысяч клиентов благодаря профессиональному 
                подходу и высокому качеству оказываемых услуг.
              </p>
              <p className="body-md mb-6">
                Наша миссия — обеспечить клиентов быстрым, качественным и доступным ремонтом техники, продлевая срок ее службы 
                и экономя ваши средства на покупке новых устройств. Мы ценим ваше время и делаем все возможное, чтобы процесс 
                ремонта был максимально удобным и прозрачным.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/services">Наши услуги</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Связаться с нами</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Наша команда за работой" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-lg border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Trophy size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">5+ лет</div>
                    <div className="text-sm text-muted-foreground">опыта работы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-background rounded-xl p-6 text-center border border-border shadow-sm">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-1">Опытные мастера</h3>
              <p className="text-muted-foreground">
                Наши специалисты регулярно проходят обучение и имеют сертификаты от производителей
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 text-center border border-border shadow-sm">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-1">Гарантия качества</h3>
              <p className="text-muted-foreground">
                Мы предоставляем гарантию до 12 месяцев на все виды выполненных работ
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 text-center border border-border shadow-sm">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-1">Быстрый сервис</h3>
              <p className="text-muted-foreground">
                Многие виды электрического ремонта выполняем при вас в течение 1-2 часов
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 text-center border border-border shadow-sm">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-1">10 000+ ремонтов</h3>
              <p className="text-muted-foreground">
                Успешно выполнили тысячи ремонтов различной сложности
              </p>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="heading-md text-center mb-8">Наша команда</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                    alt="Андрей Смирнов" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Андрей Смирнов</h3>
                  <p className="text-primary mb-3">Технический директор</p>
                  <p className="text-muted-foreground">
                    Эксперт с 10-летним опытом ремонта цифровой техники и руководства сервисными центрами
                  </p>
                </div>
              </div>
              
              <div className="bg-background rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                    alt="Елена Козлова" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Елена Козлова</h3>
                  <p className="text-primary mb-3">Руководитель отдела обслуживания</p>
                  <p className="text-muted-foreground">
                    Контролирует качество сервиса и обеспечивает высокий уровень обслуживания клиентов
                  </p>
                </div>
              </div>
              
              <div className="bg-background rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c" 
                    alt="Михаил Петров" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Михаил Петров</h3>
                  <p className="text-primary mb-3">Ведущий инженер</p>
                  <p className="text-muted-foreground">
                    Специалист высшей категории по ремонту смартфонов, ноутбуков и планшетов
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/50 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-md mb-4">Сертификаты и награды</h2>
                <p className="body-md mb-6">
                  PRIME TECH — это сертифицированный сервисный центр, официальный партнер ведущих производителей техники. 
                  Мы регулярно подтверждаем высокий уровень квалификации наших специалистов и качество оказываемых услуг.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Сертифицированный сервисный центр Apple</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Авторизованный сервисный центр Samsung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Партнер Asus, Lenovo, HP и других производителей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>"Лучший сервисный центр 2022" по версии TechAwards</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 flex items-center justify-center h-32 border border-border">
                  <img src="https://via.placeholder.com/120x60?text=Samsung" alt="Сертификат Samsung" className="max-h-12" />
                </div>
                <div className="bg-background rounded-lg p-4 flex items-center justify-center h-32 border border-border">
                  <img src="https://via.placeholder.com/120x60?text=Apple" alt="Сертификат Apple" className="max-h-12" />
                </div>
                <div className="bg-background rounded-lg p-4 flex items-center justify-center h-32 border border-border">
                  <img src="https://via.placeholder.com/120x60?text=Lenovo" alt="Сертификат Lenovo" className="max-h-12" />
                </div>
                <div className="bg-background rounded-lg p-4 flex items-center justify-center h-32 border border-border">
                  <img src="https://via.placeholder.com/120x60?text=TechAwards" alt="Награда TechAwards" className="max-h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10">
        <div className="container px-4">
          <ContactCard />
        </div>
      </section>
    </div>
  );
};

export default About;
