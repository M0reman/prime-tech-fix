
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Smartphone, Laptop, TabletSmartphone, Monitor, Tv } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, imageSrc }) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] group service-card overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden mb-6 h-44 -mx-6 -mt-6">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
        <Link to="/services">Подробнее →</Link>
      </Button>
    </div>
  );
};

const ServiceCards: React.FC = () => {
  const services = [
    {
      icon: <Smartphone size={24} />,
      title: "Ремонт телефонов",
      description: "Диагностика и ремонт смартфонов любых брендов. Замена дисплеев, разъемов, батарей.",
      delay: 0.1,
      imageSrc: "../..//serviceCards/smartphone.jpeg"
    },
    {
      icon: <Laptop size={24} />,
      title: "Ремонт ноутбуков",
      description: "Устранение неисправностей, чистка от пыли, замена комплектующих, восстановление после залития.",
      delay: 0.2,
      imageSrc: "../../serviceCards/laptop.jpeg"
    },
    {
      icon: <TabletSmartphone size={24} />,
      title: "Ремонт планшетов",
      description: "Замена экранов, разъемов питания, восстановление после программных сбоев и физических повреждений.",
      delay: 0.3,
      imageSrc: "../../serviceCards/tablet.jpeg"
    },
    {
      icon: <Monitor size={24} />,
      title: "Ремонт компьютеров",
      description: "Диагностика неисправностей, модернизация, восстановление данных и настройка ПО.",
      delay: 0.4,
      imageSrc: "../../serviceCards/pc-upgrade.jpg"
    },
    {
      icon: <Tv size={24} />,
      title: "Ремонт телевизоров",
      description: "Ремонт современных LED, OLED, QLED телевизоров. Замена матрицы, ремонт подсветки.",
      delay: 0.5,
      imageSrc: "../../serviceCards/tv.jpeg"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5V6.2C9 7.88 7.88 9 6.2 9H5C4.46957 9 3.96086 8.78929 3.58579 8.41421C3.21071 8.03914 3 7.53043 3 7V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H7C7.53043 3 8.03914 3.21071 8.41421 3.58579C8.78929 3.96086 9 4.46957 9 5Z"/><path d="M9 12V14C9 14.5304 8.78929 15.0391 8.41421 15.4142C8.03914 15.7893 7.53043 16 7 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10H6.2C7.88 10 9 11.12 9 12.8V12Z"/><path d="M15 5C15 4.46957 15.2107 3.96086 15.5858 3.58579C15.9609 3.21071 16.4696 3 17 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V7C21 7.53043 20.7893 8.03914 20.4142 8.41421C20.0391 8.78929 19.5304 9 19 9H17.8C16.12 9 15 7.88 15 6.2V5Z"/><path d="M15 19V17.2C15 15.52 16.12 14.4 17.8 14.4H19C19.5304 14.4 20.0391 14.6107 20.4142 14.9858C20.7893 15.3609 21 15.8696 21 16.4V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19Z"/></svg>,
      title: "Ремонт бытовой техники",
      description: "Ремонт стиральных и посудомоечных машин, холодильников, микроволновых печей и другой техники.",
      delay: 0.6,
      imageSrc: "../../serviceCards/appliances.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Наши услуги
          </span>
          <h2 className="heading-lg mb-4 text-gray-900">Ремонт любой сложности</h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем полный спектр услуг по электрическому ремонту цифровой и бытовой техники любых брендов и моделей с гарантией качества
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/services">Все услуги и цены</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
