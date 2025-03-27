
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import Testimonials from '@/components/home/Testimonials';
import ContactCard from '@/components/common/ContactCard';
import { Shield, Clock, Settings, Award } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="min-h-screen">
    <Hero />
    
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Почему PRIME TECH
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
    
    <section className="py-20 bg-white">
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
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          }, {
            number: '02',
            title: 'Диагностика',
            description: 'Проводим бесплатную диагностику и определяем точную причину неисправности',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          }, {
            number: '03',
            title: 'Ремонт',
            description: 'Выполняем ремонт, используя профессиональное оборудование и качественные запчасти',
            image: 'https://images.unsplash.com/photo-1581092921441-39333748bf20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          }, {
            number: '04',
            title: 'Готово',
            description: 'Проверяем работоспособность техники и выдаем гарантийный талон на выполненные работы',
            image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
    
    <Testimonials />
    
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-white">Нужна помощь с ремонтом?</h2>
          <p className="body-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время для консультации и решения вашей проблемы
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors">
              Оставить заявку
            </a>
            <a href="tel:+78001234567" className="border border-white text-white hover:bg-blue-700/30 px-8 py-3 rounded-md font-medium transition-colors">
              8 (800) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default Index;
