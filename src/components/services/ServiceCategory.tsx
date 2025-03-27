
import React from 'react';
import ServiceItem from './ServiceItem';

interface ServiceData {
  title: string;
  description: string;
  price: string;
  features: string[];
  imageSrc?: string;
}

interface ServiceCategoryProps {
  title: string;
  icon: React.ReactNode;
  services: ServiceData[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, icon, services }) => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h2 className="heading-md">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, serviceIndex) => (
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
};

export default ServiceCategory;
