
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

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

export default ServiceItem;
