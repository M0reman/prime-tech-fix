
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ContactCard from '@/components/common/ContactCard';
import { Smartphone, Laptop, TabletSmartphone, Monitor, Tv, CheckCircle } from 'lucide-react';

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

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      title: "Смартфоны и планшеты",
      icon: <Smartphone size={32} />,
      services: [
        {
          title: "Замена экрана",
          description: "Профессиональная замена дисплея на смартфонах и планшетах любых моделей.",
          price: "от 2 000 ₽",
          features: [
            "Оригинальные комплектующие",
            "Гарантия до 6 месяцев",
            "Ремонт от 1 часа"
          ],
          imageSrc: "https://images.unsplash.com/photo-1578598335941-2a055e3d7e99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Замена батареи",
          description: "Замена аккумулятора с восстановлением полной автономности устройства.",
          price: "от 1 500 ₽",
          features: [
            "Оригинальные батареи",
            "Гарантия 12 месяцев",
            "Ремонт при вас"
          ],
          imageSrc: "https://images.unsplash.com/photo-1585241920473-b472eb9ffbae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Восстановление после воды",
          description: "Комплексная чистка и восстановление утопленных устройств.",
          price: "от 3 500 ₽",
          features: [
            "Разборка и чистка",
            "Замена поврежденных элементов",
            "Высокий процент успеха"
          ],
          imageSrc: "https://images.unsplash.com/photo-1604335398974-58737eeef08a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Ноутбуки и компьютеры",
      icon: <Laptop size={32} />,
      services: [
        {
          title: "Ремонт материнской платы",
          description: "Диагностика и восстановление работы материнской платы любой сложности.",
          price: "от 3 500 ₽",
          features: [
            "Диагностика неисправностей",
            "Замена компонентов BGA",
            "Гарантия на работу"
          ],
          imageSrc: "https://images.unsplash.com/photo-1601737487795-dab272f52420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Чистка от пыли и замена термопасты",
          description: "Профилактическая чистка системы охлаждения и замена термоинтерфейса.",
          price: "от 1 500 ₽",
          features: [
            "Разборка и чистка",
            "Качественная термопаста",
            "Улучшение охлаждения"
          ],
          imageSrc: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Замена жесткого диска / SSD",
          description: "Установка новых накопителей с переносом данных и настройкой ОС.",
          price: "от 2 000 ₽",
          features: [
            "Сохранение данных",
            "Установка ОС",
            "Настройка системы"
          ],
          imageSrc: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Телевизоры и мониторы",
      icon: <Tv size={32} />,
      services: [
        {
          title: "Замена матрицы экрана",
          description: "Профессиональная замена поврежденной матрицы телевизора или монитора.",
          price: "от 5 000 ₽",
          features: [
            "Подбор матрицы",
            "Качественная установка",
            "Гарантия 6 месяцев"
          ],
          imageSrc: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Ремонт блока питания",
          description: "Восстановление работоспособности блока питания или его замена.",
          price: "от 2 500 ₽",
          features: [
            "Диагностика неисправностей",
            "Ремонт или замена",
            "Проверка всей системы"
          ],
          imageSrc: "https://images.unsplash.com/photo-1586664371805-9659f08db315?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Ремонт системной платы",
          description: "Ремонт основной платы телевизора или монитора.",
          price: "от 3 500 ₽",
          features: [
            "Диагностика неисправностей",
            "Замена компонентов",
            "Гарантия на работу"
          ],
          imageSrc: "https://images.unsplash.com/photo-1571054300642-e772e2a9899e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

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
            <div key={index} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h2 className="heading-md">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
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
          ))}
          
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
