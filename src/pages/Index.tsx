import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import CompanyLogos from '@/components/home/CompanyLogos';
import YandexReviews from '@/components/home/YandexReviews';
import ContactCard from '@/components/common/ContactCard';
import { Shield, Clock, Settings, Award } from 'lucide-react';
import { companyInfo } from '@/data/companyInfo';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="min-h-screen">
    <Helmet>
        <title>Сервисный центр Prime: Ремонт телефонов, ноутбуков и бытовой техники</title>
        <meta name='description' content='Профессиональный ремонт цифровой и бытовой техники в сервисном центре Prime. Быстрая диагностика, гарантия на все работы до 1 года. Ремонтируем телефоны, ноутбуки, планшеты и многое другое.' />
        {/* SEO: максимально полное облако тегов для keywords */}
        <meta name="keywords" content="ремонт техники, сервисный центр, ремонт смартфонов, ремонт телефонов, ремонт ноутбуков, ремонт планшетов, ремонт телевизоров, ремонт бытовой техники, диагностика, гарантия, Саранск, Республика Мордовия, Prime, сервис, обслуживание, оригинальные запчасти, профессиональный ремонт, срочный ремонт, бесплатная диагностика, ремонт Apple, ремонт Samsung, ремонт Xiaomi, ремонт Huawei, ремонт Lenovo, ремонт Asus, ремонт HP, ремонт Acer, ремонт Sony, ремонт LG, ремонт бытовой электроники, ремонт аудиотехники, ремонт видеотехники, ремонт компьютеров, апгрейд ПК, настройка техники, восстановление данных, ремонт мониторов, ремонт принтеров, ремонт сканеров, ремонт проекторов, ремонт колонок, ремонт наушников, ремонт микроволновок, ремонт холодильников, ремонт стиральных машин, ремонт пылесосов, ремонт кофемашин, ремонт электросамокатов, ремонт гироскутеров, ремонт электровелосипедов, ремонт электроскутеров, ремонт электроплит, ремонт варочных панелей, ремонт духовых шкафов, ремонт посудомоечных машин, ремонт телевизоров, ремонт ресиверов, ремонт роутеров, ремонт модемов, ремонт wi-fi, ремонт планшетов, ремонт смартфонов, ремонт телефонов, ремонт мобильных устройств, ремонт техники Саранск, ремонт техники Prime, ремонт техники недорого, ремонт техники с гарантией, ремонт техники быстро, ремонт техники качественно, ремонт техники отзывы, ремонт техники цены, ремонт техники адрес, ремонт техники телефон, ремонт техники онлайн заявка, ремонт техники консультация, ремонт техники выезд мастера, ремонт техники оригинальные запчасти, ремонт техники профессионалы, ремонт техники опытные мастера, ремонт техники диагностика бесплатно, ремонт техники гарантия, ремонт техники скидки, ремонт техники акции, ремонт техники Prime Саранск, ремонт техники сервисный центр Prime, ремонт техники официальный сервис, ремонт техники срочно, ремонт техники быстро, ремонт техники качественно, ремонт техники недорого, ремонт техники с гарантией, ремонт техники отзывы, ремонт техники цены, ремонт техники адрес, ремонт техники телефон, ремонт техники онлайн заявка, ремонт техники консультация, ремонт техники выезд мастера, ремонт техники оригинальные запчасти, ремонт техники профессионалы, ремонт техники опытные мастера, ремонт техники диагностика бесплатно, ремонт техники гарантия, ремонт техники скидки, ремонт техники акции, ремонт техники Prime Саранск, ремонт техники сервисный центр Prime, ремонт техники официальный сервис, ремонт техники срочно" />
        {/* Open Graph для соцсетей */}
        <meta property="og:title" content="Сервисный центр Prime: Ремонт телефонов, ноутбуков и бытовой техники" />
        <meta property="og:description" content="Профессиональный ремонт цифровой и бытовой техники в сервисном центре Prime. Быстрая диагностика, гарантия на все работы до 1 года. Ремонтируем телефоны, ноутбуки, планшеты и многое другое." />
        <meta property="og:image" content="https://serviceprime13.ru/logos/company-logo.jpg" />
        <meta property="og:url" content="https://serviceprime13.ru/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Сервисный центр Prime: Ремонт телефонов, ноутбуков и бытовой техники" />
        <meta name="twitter:description" content="Профессиональный ремонт цифровой и бытовой техники в сервисном центре Prime. Быстрая диагностика, гарантия на все работы до 1 года. Ремонтируем телефоны, ноутбуки, планшеты и многое другое." />
        <meta name="twitter:image" content="https://serviceprime13.ru/logos/company-logo.jpg" />
        {/* Canonical */}
        <link rel="canonical" href="https://serviceprime13.ru/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": companyInfo.name,
            "image": companyInfo.image,
            "address": {
              "@type": "PostalAddress",
              ...companyInfo.address
            },
            "telephone": companyInfo.telephone,
            "email": companyInfo.email,
            "url": companyInfo.url,
            "openingHours": companyInfo.openingHours,
            "priceRange": companyInfo.priceRange,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": companyInfo.ratingValue,
              "reviewCount": companyInfo.reviewCount
            }
          })}
        </script>
    </Helmet>
    <Hero />
    
    <section className="py-5 lg:py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Почему PRIME
          </span>
          <h2 className="heading-lg mb-4 text-gray-900">Премиальное качество обслуживания</h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            Мы стремимся к совершенству в ремонте вашей техники и уделяем внимание каждой детали
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 feature-card">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Гарантия качества</h3>
            <p className="text-gray-600">
              Мы предоставляем гарантию до 12 месяцев на все выполненные работы и заменённые детали
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 feature-card">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Быстрый ремонт</h3>
            <p className="text-gray-600">
              Многие виды ремонта мы выполняем в течение 1-2 часов при вас или в течение 1-3 дней
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 feature-card">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
              <Settings size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Профессионализм</h3>
            <p className="text-gray-600">
              Наши мастера имеют многолетний опыт и постоянно повышают свою квалификацию
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 feature-card">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Оригинальные запчасти</h3>
            <p className="text-gray-600">
              Используем только качественные комплектующие с проверенных поставщиков
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <ServiceCards />
    
    <CompanyLogos />
    
    <section className="py-5 lg:py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Как мы работаем
          </span>
          <h2 className="heading-lg mb-4 text-gray-900">Всего 4 шага до решения вашей проблемы</h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            Простой и прозрачный процесс работы для вашего удобства
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
            number: '01',
            title: 'Заявка',
            description: 'Оставьте заявку на сайте или позвоните нам по телефону для консультации',
            image: '/repairStepsCards/firstStep.jpeg'
          }, {
            number: '02',
            title: 'Диагностика',
            description: 'Проводим бесплатную диагностику и определяем точную причину неисправности',
            image: '/repairStepsCards/secondStep.jpeg'
          }, {
            number: '03',
            title: 'Ремонт',
            description: 'Выполняем ремонт, используя профессиональное оборудование и качественные запчасти',
            image: '/repairStepsCards/thirdStep.jpeg'
          }, {
            number: '04',
            title: 'Готово',
            description: 'Проверяем работоспособность техники и выдаем гарантийный талон на выполненные работы',
            image: '/repairStepsCards/fourthStep.jpeg'
          }].map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-56 object-cover" 
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-2xl font-bold px-4 py-2 rounded-lg">
                    {step.number}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <YandexReviews />
    
    <section className="py-5 lg:py-20">
      <div className="container px-4">
        <ContactCard />
      </div>
    </section>
  </div>;
};

export default Index;
