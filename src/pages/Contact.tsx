import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { sendTelegramMessage } from '@/lib/telegram';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ContactProps {
  setPrivacyModalOpen: (open: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({ setPrivacyModalOpen }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { toast } = useToast();
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      device: '',
      message: ''
    }
  });
  
  const onSubmit = async (data: ContactFormData) => {
    if (!executeRecaptcha) {
      console.error('Recaptcha not loaded');
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить капчу. Пожалуйста, обновите страницу.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    try {
      const token = await executeRecaptcha('contact_form');
      const success = await sendTelegramMessage({ ...data, gRecaptchaToken: token });
      
      if (success) {
        toast({
          title: "Заявка успешно отправлена",
          description: "Мы свяжемся с вами в ближайшее время",
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Ошибка при отправке",
        description: "Пожалуйста, попробуйте позже или свяжитесь с нами по телефону",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Контакты | Сервисный центр Prime в Саранске</title>
        <meta name='description' content='Свяжитесь с сервисным центром Prime. Адрес: г. Саранск, ул. Севастопольская, д. 56/2. Телефон: 8 (929) 747-45-11. Оставьте заявку на ремонт онлайн.' />
      </Helmet>
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Контакты
            </span>
            <h1 className="heading-lg mb-4">Свяжитесь с нами</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Мы всегда рады помочь вам с электрическим ремонтом вашей техники. Оставьте заявку или свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-background rounded-xl p-8 shadow-sm border border-border mb-8">
                <h2 className="text-2xl font-semibold mb-6">Оставить заявку</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Ваше имя <span className="text-primary">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Введите ваше имя" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Телефон <span className="text-primary">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="+7 (___) ___-__-__" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="example@mail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="device"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Устройство</FormLabel>
                            <FormControl>
                              <Input placeholder="Модель вашего устройства" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Описание проблемы</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Опишите проблему с вашим устройством"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </Button>
                    
                    <p className="text-sm text-muted-foreground">
                      Нажимая кнопку «Отправить заявку», вы соглашаетесь с нашей {" "}
                      <button
                        type="button"
                        onClick={() => setPrivacyModalOpen(true)}
                        className="text-primary hover:underline"
                      >
                        Политикой конфиденциальности
                      </button>
                    </p>
                  </form>
                </Form>
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
