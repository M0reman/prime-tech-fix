/**
 * Данные по ремонту телевизоров СЦ Прайм: прайс, марки, типы ТВ, статистика поломок.
 */

export const TV_TYPES = ['ЖК', 'LED', 'OLED', 'QLED', 'Smart TV', '4K', '8K'] as const;

export const TV_BRANDS = [
  'Samsung', 'LG', 'Sony', 'TCL', 'Hisense', 'Panasonic', 'Philips', 'Xiaomi', 'Konka', 'Toshiba',
  'Thomson', 'DEXP', 'Telefunken', 'Grunding', 'Polar', 'Haier', 'Яндекс', 'Skyworth', 'Sharp',
  'KIVI', 'Realme', 'Sber', 'SunWind', 'Hi', 'Polarline', 'Starwind', 'BBK', 'Hyundai', 'Artel',
  'Edenwood', 'Denver', 'Continental Edison', 'Bang & Olufsen', 'HKC', 'Insignia', 'JVC', 'LeEco',
  'Loewe', 'Medion', 'Metz', 'OK', 'OnePlus', 'RCA', 'Sceptre', 'Vestel', 'Vizio', 'Engel',
  'TD Systems', 'Nevir', 'Strong', 'Oppo', 'Metz Blue', 'Asus', 'Amazon', 'Cecotec', 'Nilait',
  'Daewoo', 'Dreame', 'Blaupunkt', 'Roku', 'SmartTech', 'peaq', 'Infiniton', 'Tesla', 'Grunkel',
  'Chiq', 'DNS', 'Pioner',
];

export interface TvPriceRow {
  problem: string;
  service: string;
  price: string;
}

export const TV_PRICE_TABLE: TvPriceRow[] = [
  { problem: 'Не включается', service: 'Ремонт/замена блока питания', price: 'от 1 500 ₽' },
  { problem: 'Не включается', service: 'Замена предохранителя', price: 'от 700 ₽' },
  { problem: 'Не включается', service: 'Электрический ремонт/замена', price: 'от 700 ₽' },
  { problem: 'Есть звук, нет изображения', service: 'Замена подсветки', price: 'от 1 500 ₽' },
  { problem: 'Есть звук, нет изображения', service: 'Ремонт/замена инверторов', price: 'от 1 000 ₽' },
  { problem: 'Есть звук, нет изображения', service: 'Замена светодиодов', price: 'от 1 500 ₽' },
  { problem: 'Есть изображение, нет звука', service: 'Замена аудиоусилителей', price: 'от 1 500 ₽' },
  { problem: 'Есть изображение, нет звука', service: 'Замена/ремонт динамиков', price: 'от 500 ₽' },
  { problem: 'Есть изображение, нет звука', service: 'Прошивка/замена флеш памяти', price: 'от 1 000 ₽' },
  { problem: 'Включается и сразу выключается', service: 'Ремонт/замена блока питания', price: 'от 1 500 ₽' },
  { problem: 'Включается и сразу выключается', service: 'Замена подсветки', price: 'от 1 000 ₽' },
  { problem: 'Включается и сразу выключается', service: 'Замена/ремонт main board', price: 'от 1 500 ₽' },
  { problem: 'Полосы на экране / искажения', service: 'Замена матрицы', price: 'от 3 000 ₽' },
  { problem: 'Полосы на экране / искажения', service: 'Замена/ремонт T-CON', price: 'от 1 000 ₽' },
  { problem: 'Полосы на экране / искажения', service: 'Замена/ремонт шлейфа', price: 'от 1 000 ₽' },
  { problem: 'Нет сигнала / не видит HDMI', service: 'Замена/ремонт HDMI/USB', price: 'от 1 200 ₽' },
  { problem: 'Нет сигнала / не видит HDMI', service: 'Ремонт/замена платы', price: 'от 1 500 ₽' },
  { problem: 'Нет сигнала / не видит HDMI', service: 'Прошивка', price: 'от 1 000 ₽' },
  { problem: 'Зависает / тормозит', service: 'Прошивка/сброс на заводские настройки (переполнена память)', price: 'от 1 000 ₽' },
  { problem: 'Зависает / тормозит', service: 'Прошивка/сброс на заводские настройки (сбой прошивки)', price: 'от 1 000 ₽' },
  { problem: 'Зависает / тормозит', service: 'Замена флеш или NAND памяти', price: 'от 1 500 ₽' },
  { problem: 'Пятна, затемнения', service: 'Ремонт/замена подсветки', price: 'от 1 500 ₽' },
  { problem: 'Пятна, затемнения', service: 'Замена подсветки (выгоревшие диоды)', price: 'от 1 500 ₽' },
  { problem: 'Сам перезагружается', service: 'Перепрошивка/замена флеш или NAND памяти', price: 'от 1 500 ₽' },
  { problem: 'Сам перезагружается', service: 'Ремонт/замена main board', price: 'от 2 500 ₽' },
  { problem: 'Сам перезагружается', service: 'Прошивка (перегрев)', price: 'от 1 000 ₽' },
  { problem: 'Не ловит каналы', service: 'Ремонт или замена TV-тюнера', price: 'от 1 500 ₽' },
  { problem: 'Отсутствие сигнала Wi‑Fi', service: 'Ремонт модуля Wi‑Fi', price: 'от 1 500 ₽' },
  { problem: 'Полосы на матрице или искажённое изображение', service: 'Ремонт нижней планки телевизора', price: 'от 2 500 ₽' },
];

export const TV_REPAIR_STATS = [
  { label: 'Подсветка (LED)', percent: '40–60%' },
  { label: 'Блок питания', percent: '~20%' },
  { label: 'Main board', percent: '~15%' },
  { label: 'Матрица', percent: '~10%' },
] as const;
