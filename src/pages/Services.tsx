import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import getServicesData from '@/data/servicesData';
import ContactCard from '@/components/common/ContactCard';

interface ServiceItemProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  imageSrc?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, price, features, imageSrc }) => {
  return (
    <div className="bg-background rounded-xl p-6 md:p-8 border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-3px] overflow-hidden">
      {imageSrc && (
        <div className="h-44 -mx-8 -mt-8 mb-6 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="font-bold text-2xl mb-4 text-primary">{price}</div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full" asChild>
        <Link to="/contact">Заказать услугу</Link>
      </Button>
    </div>
  );
};

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = getServicesData();

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Услуги по ремонту техники | Сервисный центр Prime</title>
        <meta name='description' content='Полный спектр услуг по ремонту цифровой и бытовой техники. Ремонт смартфонов, ноутбуков, телевизоров, бытовой техники и многого другого. Гарантия качества и доступные цены.' />
      </Helmet>
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Услуги и цены
            </span>
            <h1 className="heading-lg mb-4">Полный спектр услуг по ремонту техники</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Предлагаем качественный и оперативный ремонт цифровой и бытовой техники любой сложности с гарантией на все виды работ
            </p>
          </div>

          {serviceCategories.map((category, index) => {
            return (
              <div key={index} className="mb-16">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <ServiceItem 
                      key={serviceIndex}
                      title={service.title}
                      description={service.description}
                      price={service.price}
                      features={service.features}
                      imageSrc={service.imageSrc}
                    />
                  ))}
                </div>
              </div>
            );
          })}
          
          <div className="bg-secondary/50 rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4">Не нашли нужную услугу?</h3>
            <p className="text-muted-foreground mb-6">
              Мы выполняем и другие виды работ по ремонту цифровой и бытовой техники.
              Свяжитесь с нами для консультации и уточнения стоимости.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Получить консультацию</Link>
            </Button>
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

export default Services;
