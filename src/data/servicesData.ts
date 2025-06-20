
import { Smartphone, Laptop, Tv } from 'lucide-react';
import React from 'react';
import { LucideProps } from 'lucide-react';

export interface ServiceData {
  title: string;
  description: string;
  price: string;
  features: string[];
  imageSrc?: string;
}

export interface ServiceCategoryData {
  services: ServiceData[];
}

const getServicesData = (): ServiceCategoryData[] => [
  {
    services: [
      {
        title: "Ремонт смартфонов/ телефонов",
        description: "",
        price: "от 400 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт планшетов",
        description: "",
        price: "от 400 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1471279136892-55af5dc6895f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт компьютеров/ ноутбуков/ мониторов/ системных блоков",
        description: "",
        price: "от 600 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт лазерных принтеров/ сканеров/ МФУ",
        description: "",
        price: "от 400 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1706895040634-62055892cbbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт телевизоров ЖК/ LED/ QLED/ OLED/ HD/ ТВ-приставок",
        description: "",
        price: "от 800 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1548780364-65517933892b?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт ЧПУ станков",
        description: "",
        price: "Согласование цены после диагностики",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1666634157070-6fd830fb5672?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт аудио-видео техники",
        description: "",
        price: "от 600 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1637441439765-e521d192a7a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт автоусилителей",
        description: "",
        price: "от 500 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1683027910080-4abf6fbcaa7e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт ресиверов",
        description: "",
        price: "от 500 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1526775310031-fc50d81ce518?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт зеркальных/ цифровых фотоаппаратов/ видеокамер/ экшн камер",
        description: "",
        price: "от 800 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт техники Apple (iPhone/ iPad/ iMac/ MacBook/Apple Watch) ",
        description: "",
        price: "от 400 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1511467007263-aa72ed0157dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт игровых приставок ( PSP/ xBox360/ xBoxOne/ PS 1,2,3,4,5 и тд.)",
        description: "",
        price: "от 800 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1676624763787-371ac28350e8?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт навигаторов/ автомагнитол/ регистраторов/ радар-детекторов",
        description: "",
        price: "от 600 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1631035012469-751baca1d4a0?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт раций",
        description: "",
        price: "от 600 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1586374579268-e08642454549?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт любой бытовой техники (СВЧ-печей/  пылесосов/ пароотпаривателей/ утюгов и т.д.)",
        description: "",
        price: "от 500 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1505&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт беспроводных колонок",
        description: "",
        price: "от 500 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1674303324806-7018a739ed11?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Ремонт самокатов",
        description: "",
        price: "от 1 000 ₽",
        features: [],
        imageSrc: "https://plus.unsplash.com/premium_photo-1716666701791-8111dd218bc3?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Антивирусная профилактика",
        description: "",
        price: "от 400 ₽",
        features: [],
        imageSrc: "https://plus.unsplash.com/premium_photo-1733317239304-a6bf462a2596?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Техническое обслуживание",
        description: "",
        price: "от 600 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1676311522524-fa7c0bffd644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Апгрейд ноутбуков, моноблоков, системных блоков",
        description: "",
        price: "от 1 500 ₽",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1591238372338-22d30c883a86?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Выездной ремонт",
        description: "",
        price: "После согласование с мастером",
        features: [],
        imageSrc: "https://images.unsplash.com/photo-1746005718004-1f992c399428?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    ]
  },
];

export default getServicesData;
