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
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ruLabels from 'react-phone-number-input/locale/ru.json';

interface ContactProps {
  setPrivacyModalOpen: (open: boolean) => void;
  setSuccessModalOpen: (open: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({ setPrivacyModalOpen, setSuccessModalOpen }) => {
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
        setSuccessModalOpen(true);
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
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
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
                              <PhoneInput
                                {...field}
                                defaultCountry="RU"
                                placeholder="+7 999 123-45-67"
                                international
                                countryCallingCodeEditable={false}
                                className="w-full"
                                inputClassName="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                labels={ruLabels}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="hidden">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <Input type="hidden" {...field} />
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="device"
                        render={({ field }) => (
                          <Input type="hidden" {...field} />
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
                              className="rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            
            <div className="lg:col-span-1">
              <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border mb-8">
                <div className="aspect-video w-full">
                  <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
                    <a href="https://yandex.ru/maps/org/praym/1205449112/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}>Прайм</a>
                    <a href="https://yandex.ru/maps/42/saransk/category/phone_repair/184107787/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}>Ремонт телефонов в Саранске</a>
                    <a href="https://yandex.ru/maps/42/saransk/category/audio_and_video_devices_repair/184108221/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: 12, position: "absolute", top: 28 }}>Ремонт аудиотехники и видеотехники в Саранске</a>
                    <iframe
                      src="https://yandex.ru/map-widget/v1/org/praym/1205449112/?ll=45.224695%2C54.193333&z=17.14"
                      width="100%"
                      height="100%"
                      frameBorder="1"
                      allowFullScreen={true}
                      style={{ position: "relative" }}
                      title="Яндекс.Карта сервисного центра"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
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
      
      <div className="container px-4">
        <div className="bg-blue-600 text-white rounded-xl p-8 mt-12 flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="flex-shrink-0">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
              <path d="M8 21h8"/>
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Бесплатный выезд специалиста по Республике Мордовия</h3>
            <p className="text-blue-100 mb-4">Заберём вашу технику на ремонт прямо от двери. Оставьте заявку — и мы свяжемся для согласования времени!</p>
            <Button
              size="lg"
              className="bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Заказать бесплатный выезд
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
