import { Smartphone, Laptop, TabletSmartphone, Monitor, Tv } from 'lucide-react';
import React from 'react';

export interface ServiceData {
  title: string;
  description: string;
  price: string;
  features: string[];
  imageSrc?: string;
}

export interface ServiceCategoryData {
  title: string;
  icon: (props: React.ComponentProps<typeof Smartphone>) => React.ReactNode;
  services: ServiceData[];
}

const getServicesData = (): ServiceCategoryData[] => [
  {
    title: "Смартфоны и планшеты",
    icon: (props) => <Smartphone {...props} />,
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
    icon: (props) => <Laptop {...props} />,
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
    icon: (props) => <Tv {...props} />,
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

export default getServicesData;
