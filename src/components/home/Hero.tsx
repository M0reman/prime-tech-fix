
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0" />
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
          alt="Background Pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 animate-fade-down" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              СЦ PRIME
            </span>
            <h1 className="heading-xl mb-6 text-gray-900">
              Профессиональный ремонт<br className="hidden md:inline" /> цифровой и бытовой техники
            </h1>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Мы оперативно и качественно восстановим работоспособность вашей техники. Работаем с любыми брендами и моделями. Гарантия на все виды работ.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="gap-2 animate-fade-in bg-blue-600 hover:bg-blue-700" style={{ animationDelay: '0.4s' }}>
                <Link to="/contact">
                  Оставить заявку
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="animate-fade-in border-blue-600 text-blue-600 hover:bg-blue-50" style={{ animationDelay: '0.5s' }}>
                <Link to="/services">
                  Все услуги
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white rounded-xl shadow-sm border p-4 text-center hover:shadow-md transition-all">
              <div className="font-bold text-3xl text-blue-600 mb-1">5+</div>
              <p className="text-gray-600 text-sm">лет опыта</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-4 text-center hover:shadow-md transition-all">
              <div className="font-bold text-3xl text-blue-600 mb-1">10K+</div>
              <p className="text-gray-600 text-sm">довольных клиентов</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-4 text-center hover:shadow-md transition-all">
              <div className="font-bold text-3xl text-blue-600 mb-1">24/7</div>
              <p className="text-gray-600 text-sm">поддержка</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-4 text-center hover:shadow-md transition-all">
              <div className="font-bold text-3xl text-blue-600 mb-1">1 год</div>
              <p className="text-gray-600 text-sm">гарантии</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Devices */}
      <div className="absolute bottom-10 right-5 lg:right-20 w-40 h-40 md:w-64 md:h-64 animate-float hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1551515300-2d3b7bb80920?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Smartphone" 
          className="object-contain w-full h-full drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-20 left-5 lg:left-20 w-40 h-40 md:w-52 md:h-52 animate-float-delayed hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Laptop" 
          className="object-contain w-full h-full drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
