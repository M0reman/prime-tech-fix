
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesHelpSection: React.FC = () => {
  return (
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
  );
};

export default ServicesHelpSection;
