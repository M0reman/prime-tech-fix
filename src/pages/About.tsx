import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ContactCard from '@/components/common/ContactCard';
import { ShieldCheck, Users, Trophy, Clock } from 'lucide-react';
import { Certificate } from 'crypto';
import Certificates from '@/components/common/Certificates';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>О компании | Сервисный центр Prime</title>
        <meta name='description' content='Узнайте больше о сервисном центре Prime. Наша миссия, команда профессионалов и гарантии качества. Работаем с 2011 года, чтобы ваша техника служила дольше.' />
        <meta name="keywords" content="ремонт техники, сервисный центр, о компании, Prime, Саранск, Республика Мордовия, команда, опыт, профессионалы, гарантия, история, ремонт смартфонов, ремонт ноутбуков, ремонт телевизоров, ремонт бытовой техники, оригинальные запчасти, профессиональный ремонт, срочный ремонт, бесплатная диагностика, ремонт Apple, ремонт Samsung, ремонт Xiaomi, ремонт Huawei, ремонт Lenovo, ремонт Asus, ремонт HP, ремонт Acer, ремонт Sony, ремонт LG, ремонт компьютеров, апгрейд ПК, настройка техники, восстановление данных, ремонт мониторов, ремонт принтеров, ремонт сканеров, ремонт проекторов, ремонт колонок, ремонт наушников, ремонт микроволновок, ремонт холодильников, ремонт стиральных машин, ремонт пылесосов, ремонт кофемашин, ремонт электросамокатов, ремонт гироскутеров, ремонт электровелосипедов, ремонт электроскутеров, ремонт электроплит, ремонт варочных панелей, ремонт духовых шкафов, ремонт посудомоечных машин, ремонт ресиверов, ремонт роутеров, ремонт модемов, ремонт wi-fi, ремонт планшетов, ремонт смартфонов, ремонт телефонов, ремонт мобильных устройств, ремонт техники Саранск, ремонт техники Prime, ремонт техники недорого, ремонт техники с гарантией, ремонт техники быстро, ремонт техники качественно, ремонт техники отзывы, ремонт техники цены, ремонт техники адрес, ремонт техники телефон, ремонт техники онлайн заявка, ремонт техники консультация, ремонт техники выезд мастера, ремонт техники оригинальные запчасти, ремонт техники профессионалы, ремонт техники опытные мастера, ремонт техники диагностика бесплатно, ремонт техники гарантия, ремонт техники скидки, ремонт техники акции, ремонт техники Prime Саранск, ремонт техники сервисный центр Prime, ремонт техники официальный сервис, ремонт техники срочно" />
        {/* Open Graph для соцсетей */}
        <meta property="og:title" content="О компании | Сервисный центр Prime" />
        <meta property="og:description" content="Узнайте больше о сервисном центре Prime. Наша миссия, команда профессионалов и гарантии качества. Работаем с 2011 года, чтобы ваша техника служила дольше." />
        <meta property="og:image" content="https://serviceprime13.ru/logos/company-logo.jpg" />
        <meta property="og:url" content="https://serviceprime13.ru/about" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="О компании | Сервисный центр Prime" />
        <meta name="twitter:description" content="Узнайте больше о сервисном центре Prime. Наша миссия, команда профессионалов и гарантии качества. Работаем с 2011 года, чтобы ваша техника служила дольше." />
        <meta name="twitter:image" content="https://serviceprime13.ru/logos/company-logo.jpg" />
        {/* Canonical */}
        <link rel="canonical" href="https://serviceprime13.ru/about" />
      </Helmet>
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
                Сервисный центр «Prime» — ваш надежный партнер в сфере профессионального ремонта техники любой сложности.
                Уже более 14 лет мы оказываем широкий спектр высококачественных услуг, помогая клиентам восстанавливать работоспособность устройств любых марок и моделей.
                Команда опытных специалистов использует современные технологии и оригинальные комплектующие, чтобы ваша техника вновь радовала вас безупречной работой.
              </p>
              <p className="body-md mb-6">
                Мы ценим ваше доверие и гарантируем индивидуальный подход, оперативность и прозрачность на каждом этапе обслуживания.
                С «Prime» вы всегда можете быть уверены в надежности и качестве ремонта вашей техники!
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
                  src="/logos/company-background.jpg" 
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
                    <div className="font-bold">10+ лет</div>
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
          
          {/* КАРТОЧКИ СОТРУДНИКОВ */}
          {/* <div className="mb-20">
            <h2 className="heading-md text-center mb-8">Наша команда</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/logos/company-background.jpg" 
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
                    src="/logos/company-background.jpg" 
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
                    src="/logos/company-background.jpg" 
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
          </div> */}
          
          <Certificates />

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
