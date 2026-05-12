import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Award,
  Battery,
  Box,
  Cpu,
  Fan,
  HandCoins,
  HardDrive,
  Plug,
  Sparkles,
  Users,
  Wifi,
  Zap,
} from 'lucide-react';

export interface LaptopBrandEntry {
  name: string;
  /** Путь от корня `public/` (с ведущим `/`). `null` — только текст в ячейке. */
  logoSrc: string | null;
}

/**
 * Порядок и набор близки к референсу notebook1.ru/remont-noutbuka/ («Осуществляем ремонт…»).
 * Логотипы — только локальные файлы в репозитории.
 */
export const LAPTOP_BRANDS: LaptopBrandEntry[] = [
  { name: 'Acer', logoSrc: '/brands-img/acer.webp' },
  { name: 'Apple', logoSrc: '/brands-img/apple.webp' },
  { name: 'Asus', logoSrc: '/brands-img/asus.webp' },
  { name: 'Dell', logoSrc: '/brands/laptop/dell.svg' },
  { name: 'eMachines', logoSrc: '/brands/laptop/emachines.svg' },
  { name: 'Fujitsu-Siemens', logoSrc: '/brands/laptop/fujitsu-siemens.svg' },
  { name: 'HP', logoSrc: '/brands-img/hp.webp' },
  { name: 'HUAWEI', logoSrc: '/brands-img/huawei.webp' },
  { name: 'Lenovo', logoSrc: '/brands-img/lenovo.webp' },
  { name: 'LG', logoSrc: '/brands/tv/lg.svg' },
  { name: 'MSI', logoSrc: '/brands/laptop/msi.svg' },
  { name: 'Packard Bell', logoSrc: '/brands/laptop/packard-bell.svg' },
  { name: 'Roverbook', logoSrc: '/brands/laptop/roverbook.svg' },
  { name: 'Samsung', logoSrc: '/brands-img/samsung.webp' },
  { name: 'Sony', logoSrc: '/brands/tv/sony.svg' },
  { name: 'Thunderobot', logoSrc: '/brands/laptop/thunderobot.svg' },
  { name: 'Toshiba', logoSrc: '/brands/laptop/toshiba.svg' },
  { name: 'Xiaomi', logoSrc: '/brands-img/xiaomi.webp' },
];

export interface LaptopMalfunctionItem {
  label: string;
  priceFrom: string;
}

export interface LaptopMalfunctionGroup {
  title: string;
  Icon: LucideIcon;
  items: LaptopMalfunctionItem[];
}

export const LAPTOP_MALFUNCTION_GROUPS: LaptopMalfunctionGroup[] = [
  {
    title: 'Корпус',
    Icon: Box,
    items: [
      { label: 'Плохо открывается или закрывается', priceFrom: 'от 2 300 руб.' },
      { label: 'Сломана крышка матрицы', priceFrom: 'от 3 900 руб.' },
      { label: 'Сломан топкейс', priceFrom: 'от 3 500 руб.' },
      { label: 'Сломана рамка экрана', priceFrom: 'от 2 300 руб.' },
      { label: 'Сломан поддон', priceFrom: 'от 2 300 руб.' },
      { label: 'Сломаны петли', priceFrom: 'от 2 300 руб.' },
    ],
  },
  {
    title: 'Сеть и интернет',
    Icon: Wifi,
    items: [
      { label: 'Не ловит WI-FI', priceFrom: 'от 1 000 руб.' },
      { label: 'Не работает Bluetooth', priceFrom: 'от 2 300 руб.' },
      { label: 'Не работает Wi-Fi', priceFrom: 'от 2 300 руб.' },
      { label: 'Не работает сетевая карта', priceFrom: 'от 2 300 руб.' },
    ],
  },
  {
    title: 'Батарея',
    Icon: Battery,
    items: [
      { label: 'Долго заряжается', priceFrom: 'от 1 000 руб.' },
      { label: 'Быстро разряжается', priceFrom: 'от 2 300 руб.' },
      { label: 'Не работает батарея', priceFrom: 'от 2 300 руб.' },
      { label: 'Не заряжается', priceFrom: 'от 1 000 руб.' },
    ],
  },
  {
    title: 'Система охлаждения',
    Icon: Fan,
    items: [
      { label: 'Тротлит', priceFrom: 'от 1 000 руб.' },
      { label: 'Гудит или шумит', priceFrom: 'от 2 300 руб.' },
      { label: 'Перегревается', priceFrom: 'от 1 000 руб.' },
      { label: 'Не работает кулер', priceFrom: 'от 2 300 руб.' },
    ],
  },
  {
    title: 'Порты',
    Icon: Plug,
    items: [
      { label: 'Не работает разъем', priceFrom: 'от 4 900 руб.' },
      { label: 'Не работает Type-C', priceFrom: 'от 5 900 руб.' },
      { label: 'Не работает привод', priceFrom: 'от 2 300 руб.' },
      { label: 'Не работает USB', priceFrom: 'от 4 900 руб.' },
      { label: 'Не работает порт', priceFrom: 'от 4 900 руб.' },
      { label: 'Не работает HDMI', priceFrom: 'от 5 900 руб.' },
      { label: 'Не работает жесткий диск', priceFrom: 'от 2 300 руб.' },
    ],
  },
  {
    title: 'Устройства',
    Icon: Cpu,
    items: [
      { label: 'Не видит устройств', priceFrom: 'от 2 300 руб.' },
      { label: 'Не работает или разбит экран (матрица)', priceFrom: 'от 4 900 руб.' },
      { label: 'Не работает клавиатура', priceFrom: 'от 2 300 руб.' },
      { label: 'Не работает микрофон', priceFrom: 'от 2 500 руб.' },
      { label: 'Не работает камера', priceFrom: 'от 2 500 руб.' },
      { label: 'Не работает тачпад', priceFrom: 'от 2 300 руб.' },
      { label: 'Не работает видеокарта', priceFrom: 'от 3 500 руб.' },
    ],
  },
  {
    title: 'Общие поломки',
    Icon: HardDrive,
    items: [
      { label: 'Мерцание экрана', priceFrom: 'от 2 500 руб.' },
      { label: 'Уходит в синий экран', priceFrom: 'от 2 500 руб.' },
      { label: 'Нет изображения', priceFrom: 'от 2 500 руб.' },
      { label: 'Код ошибки 43', priceFrom: 'от 3 500 руб.' },
      { label: 'Тормозит или зависает во время работы', priceFrom: 'от 2 500 руб.' },
      { label: 'Самопроизвольно выключается, перезагружается', priceFrom: 'от 3 500 руб.' },
      { label: 'Залит водой или другой жидкостью', priceFrom: 'от 5 200 руб.' },
      { label: 'Нет звука', priceFrom: 'от 2 500 руб.' },
      { label: 'Ноутбук не включается', priceFrom: 'от 2 500 руб.' },
    ],
  },
];

export interface LaptopAdvantageEntry {
  title: string;
  body: string;
  Icon: LucideIcon;
}

/** Тексты как на референсе «Наши преимущества»; правки контента — отдельно по согласованию. */
export const LAPTOP_ADVANTAGES: LaptopAdvantageEntry[] = [
  {
    title: 'Быстрая и бесплатная диагностика',
    body: 'Проведем комплексную диагностику неисправности Вашего устройства в течение 3-х рабочих дней. При заказе ремонта диагностика бесплатно.',
    Icon: Activity,
  },
  {
    title: 'Честная стоимость',
    body: 'Мы сотрудничаем напрямую с производителями, закупая комплектующие по оптовым ценам. Высокое качество ремонтных работ и запчастей подтверждается гарантией.',
    Icon: HandCoins,
  },
  {
    title: 'Образцовая репутация',
    body: 'Мы входим в состав Ассоциации Сервисных Центров, для членства в которой необходимо соблюдать международные стандарты качества услуг.',
    Icon: Award,
  },
  {
    title: 'Делаем то, что не могут сделать другие',
    body: 'Нас рекомендуют конкуренты. Мы ремонтируем то, что другие сервисные центры считают невозможным',
    Icon: Sparkles,
  },
  {
    title: 'Квалифицированные специалисты',
    body: 'Опытные мастера проходят обязательную сертификацию и курсы повышения квалификации.',
    Icon: Users,
  },
  {
    title: 'Оперативность',
    body: 'Большинство неисправностей мы устраняем сразу. Более сложные ремонты выполняем за 1–3 рабочих дня.',
    Icon: Zap,
  },
];
