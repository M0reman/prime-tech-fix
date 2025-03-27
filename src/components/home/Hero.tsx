
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background z-0" />
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 animate-fade-down" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Сервисный центр PRIME TECH
            </span>
            <h1 className="heading-xl mb-6">
              Профессиональный ремонт<br className="hidden md:inline" /> цифровой и бытовой техники
            </h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Мы оперативно и качественно восстановим работоспособность вашей техники. Работаем с любыми брендами и моделями. Гарантия на все виды работ.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Link to="/contact">
                  Оставить заявку
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Link to="/services">
                  Все услуги
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-background rounded-xl shadow-sm border p-4 text-center">
              <div className="font-bold text-3xl text-primary mb-1">5+</div>
              <p className="text-muted-foreground text-sm">лет опыта</p>
            </div>
            <div className="bg-background rounded-xl shadow-sm border p-4 text-center">
              <div className="font-bold text-3xl text-primary mb-1">10K+</div>
              <p className="text-muted-foreground text-sm">довольных клиентов</p>
            </div>
            <div className="bg-background rounded-xl shadow-sm border p-4 text-center">
              <div className="font-bold text-3xl text-primary mb-1">24/7</div>
              <p className="text-muted-foreground text-sm">поддержка</p>
            </div>
            <div className="bg-background rounded-xl shadow-sm border p-4 text-center">
              <div className="font-bold text-3xl text-primary mb-1">1 год</div>
              <p className="text-muted-foreground text-sm">гарантии</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
