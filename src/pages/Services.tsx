
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ContactCard from '@/components/common/ContactCard';
import ServiceCategory from '@/components/services/ServiceCategory';
import ServicesHelpSection from '@/components/services/ServicesHelpSection';
import getServicesData from '@/data/servicesData';

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

          {serviceCategories.map((category, index) => (
            <ServiceCategory
              key={index}
              title={category.title}
              icon={category.icon}
              services={category.services}
            />
          ))}
          
          <ServicesHelpSection />
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
