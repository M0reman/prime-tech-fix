
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
        imageSrc: "/serviceCards/smartphone.webp"
      },
      {
        title: "Ремонт планшетов",
        description: "",
        price: "от 400 ₽",
        features: [],
        imageSrc: "/serviceCards/tablet.webp",
      },
      {
        title: "Ремонт компьютеров/ ноутбуков/ мониторов/ системных блоков",
        description: "",
        price: "от 600 ₽",
        features: [],
        imageSrc: "/serviceCards/laptop.webp"
      },
      {
        title: "Ремонт лазерных принтеров/ сканеров/ МФУ",
        description: "",
        price: "от 400 ₽",
        features: [],
        imageSrc: "/serviceCards/printer.webp"
      },
      {
        title: "Ремонт телевизоров ЖК/ LED/ QLED/ OLED/ HD/ ТВ-приставок",
        description: "",
        price: "от 800 ₽",
        features: [],
        imageSrc: "/serviceCards/tv.webp"
      },
      {
        title: "Ремонт ЧПУ станков",
        description: "",
        price: "Согласование цены после диагностики",
        features: [],
        imageSrc: "/serviceCards/cnc.webp"
      },
      {
        title: "Ремонт аудио-видео техники",
        description: "",
        price: "от 600 ₽",
        features: [],
        imageSrc: "/serviceCards/audio-video-devices.webp"
      },
      {
        title: "Ремонт автоусилителей",
        description: "",
        price: "от 500 ₽",
        features: [],
        imageSrc: "/serviceCards/car-amplifier.webp"
      },
      {
        title: "Ремонт ресиверов",
        description: "",
        price: "от 500 ₽",
        features: [],
        imageSrc: "/serviceCards/tv-reciever.webp"
      },
      {
        title: "Ремонт зеркальных/ цифровых фотоаппаратов/ видеокамер/ экшн камер",
        description: "",
        price: "от 800 ₽",
        features: [],
        imageSrc: "/serviceCards/camera.webp"
      },
      {
        title: "Ремонт техники Apple (iPhone/ iPad/ iMac/ MacBook/Apple Watch) ",
        description: "",
        price: "от 400 ₽",
        features: [],
        imageSrc: "/serviceCards/apple-devices.webp"
      },
      {
        title: "Ремонт игровых приставок ( PSP/ xBox360/ xBoxOne/ PS 1,2,3,4,5 и тд.)",
        description: "",
        price: "от 800 ₽",
        features: [],
        imageSrc: "/serviceCards/playstation.webp"
      },
      {
        title: "Ремонт навигаторов/ автомагнитол/ регистраторов/ радар-детекторов",
        description: "",
        price: "от 600 ₽",
        features: [],
        imageSrc: "/serviceCards/car-multimedia.webp"
      },
      {
        title: "Ремонт раций",
        description: "",
        price: "от 600 ₽",
        features: [],
        imageSrc: "/serviceCards/walkie-talkie.webp"
      },
      {
        title: "Ремонт любой бытовой техники (СВЧ-печей/  пылесосов/ пароотпаривателей/ утюгов и т.д.)",
        description: "",
        price: "от 500 ₽",
        features: [],
        imageSrc: "/serviceCards/appliances.webp"
      },
      {
        title: "Ремонт беспроводных колонок",
        description: "",
        price: "от 500 ₽",
        features: [],
        imageSrc: "/serviceCards/wireless-audio.webp"
      },
      {
        title: "Ремонт самокатов",
        description: "",
        price: "от 1 000 ₽",
        features: [],
        imageSrc: "/serviceCards/scooter.webp"
      },
      {
        title: "Антивирусная профилактика",
        description: "",
        price: "от 400 ₽",
        features: [],
        imageSrc: "/serviceCards/antivirus.webp"
      },
      {
        title: "Техническое обслуживание",
        description: "",
        price: "от 600 ₽",
        features: [],
        imageSrc: "/serviceCards/maintenance.webp"
      },
      {
        title: "Апгрейд ноутбуков, моноблоков, системных блоков",
        description: "",
        price: "от 1 500 ₽",
        features: [],
        imageSrc: "/serviceCards/pc-upgrade.webp"
      },
      {
        title: "Выездной ремонт",
        description: "",
        price: "После согласования с мастером",
        features: [],
        imageSrc: "/serviceCards/outride-maintenance.webp"
      },
    ]
  },
];

export default getServicesData;
