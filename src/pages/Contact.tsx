
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    device: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявка успешно отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
        duration: 5000,
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        device: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Контакты
            </span>
            <h1 className="heading-lg mb-4">Свяжитесь с нами</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Мы всегда рады помочь вам с ремонтом вашей техники. Оставьте заявку или свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-background rounded-xl p-8 shadow-sm border border-border mb-8">
                <h2 className="text-2xl font-semibold mb-6">Оставить заявку</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Ваше имя <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Телефон <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="device" className="text-sm font-medium">
                        Устройство
                      </label>
                      <Input
                        id="device"
                        name="device"
                        value={formData.device}
                        onChange={handleChange}
                        placeholder="Модель вашего устройства"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <label htmlFor="message" className="text-sm font-medium">
                      Описание проблемы
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Опишите проблему с вашим устройством"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Нажимая кнопку «Отправить заявку», вы соглашаетесь с нашей {" "}
                    <a href="#" className="text-primary hover:underline">
                      Политикой конфиденциальности
                    </a>
                  </p>
                </form>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                  <Phone size={24} className="text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                  <a href="tel:+79297474511" className="block text-primary hover:underline">
                    8 (929) 747-45-11
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Звоните нам по любым вопросам
                  </p>
                </div>
                
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                  <Mail size={24} className="text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:serviceprime@mail.ru" className="block text-primary hover:underline">
                    serviceprime@mail.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Для заявок и предложений
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border mb-8">
                <div className="aspect-video w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.081710639441!2d45.221809469281055!3d54.19393705994919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41440902fdcfc65d%3A0x3eba2bf87a08e7dc!2z0YPQuy4g0KHQtdCy0LDRgdGC0L7Qv9C-0LvRjNGB0LrQsNGPLCA1NiDQutC-0YDQv9GD0YEgMiwg0KHQsNGA0LDQvdGB0LosINCg0LXRgdC_LiDQnNC-0YDQtNC-0LLQuNGPLCA0MzAwMDk!5e0!3m2!1sru!2sru!4v1750052740946!5m2!1sru!2sru" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Карта местоположения сервисного центра"
                  ></iframe>
                </div>
              </div>
              
              <div className="bg-background rounded-xl p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-semibold mb-6">Наш адрес</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Сервисный центр PRIME</h3>
                      <p className="text-muted-foreground">
                        г. Саранск, ул. Севастопольская, д. 56/2
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Часы работы</h3>
                      <p className="text-muted-foreground">
                        Пн-Пт: 10:00-19:00<br />
                        Сб: 10:00-14:00
                      </p>
                    </div>
                  </div>
                  
                  {/* <div>
                    <h3 className="text-lg font-medium mb-3">Как добраться:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary shrink-0">•</span>
                        <span>Метро "Техническая", выход №3, 5 минут пешком</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary shrink-0">•</span>
                        <span>Автобусы №123, №456, остановка "Сервисный центр"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary shrink-0">•</span>
                        <span>Бесплатная парковка на территории центра</span>
                      </li>
                    </ul>
                  </div> */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
