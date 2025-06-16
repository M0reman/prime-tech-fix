import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import getServicesData from '@/data/servicesData';

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
            const IconComponent = category.iconComponent;
            return (
              <div key={index} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <IconComponent size={32} />
                  </div>
                  <h2 className="heading-md">{category.title}</h2>
                </div>
                
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
          <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 relative overflow-hidden shadow-md text-white">
            <div className="absolute w-64 h-64 rounded-full bg-blue-500/30 -top-32 -right-32 blur-3xl pointer-events-none" />
            <div className="absolute w-64 h-64 rounded-full bg-blue-700/30 -bottom-32 -left-32 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-4 text-white">Нужна помощь с ремонтом?</h2>
              <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время для консультации и решения вашей проблемы
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-blue-700 hover:bg-blue-50">
                  <Link to="/contact">
                    Оставить заявку
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-blue-700/30">
                  <a href="tel:+79297474511" className="font-medium">
                    8 (929) 747-45-11
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
