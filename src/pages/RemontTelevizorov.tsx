import React, { useEffect } from 'react';
import { CheckCircle, Package, Shield, Wrench, BarChart3 } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import ContactCard from '@/components/common/ContactCard';
import { ROUTES_META } from '@/seo/routesMeta';
import {
  TV_TYPES,
  TV_BRANDS,
  TV_PRICE_TABLE,
  TV_REPAIR_STATS,
} from '@/data/tvRepairData';

const baseUrl = import.meta.env.BASE_URL;

const TV_BRAND_LOGOS = [
  { name: 'Samsung', src: `${baseUrl}brands/tv/samsung.svg`, imageClass: '' },
  { name: 'LG', src: `${baseUrl}brands/tv/lg.svg`, imageClass: '' },
  { name: 'Sony', src: `${baseUrl}brands/tv/sony.svg`, imageClass: '' },
  { name: 'TCL', src: `${baseUrl}brands/tv/tcl.svg`, imageClass: 'scale-125' },
  { name: 'Hisense', src: `${baseUrl}brands/tv/hisense.svg`, imageClass: '' },
  { name: 'Philips', src: `${baseUrl}brands/tv/philips.svg`, imageClass: '' },
  { name: 'Xiaomi', src: `${baseUrl}brands/tv/xiaomi.svg`, imageClass: '' },
  { name: 'BBK', src: `${baseUrl}brands/tv/bbk.svg`, imageClass: '' },
  { name: 'Hyundai', src: `${baseUrl}brands/tv/hyundai.svg`, imageClass: '' },
  { name: 'Telefunken', src: `${baseUrl}brands/tv/telefunken.svg`, imageClass: '' },
  { name: 'Яндекс', src: `${baseUrl}brands/tv/yandex.svg`, imageClass: '' },
  { name: 'Sber', src: `${baseUrl}brands/tv/sber.svg`, imageClass: '' },
];

const RemontTelevizorov: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = ROUTES_META['/remont-televizorov'];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        url="/remont-televizorov"
      />
      <section className="py-12 md:py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Ремонт в сервисном центре
            </span>
            <h1 className="heading-lg mb-4">Ремонт телевизоров в Саранске</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              Ремонт телевизоров {TV_TYPES.join(', ')} в сервисном центре Прайм. Забор техники в сервис, бесплатная диагностика при ремонте, гарантия на работы.
            </p>
            <div className="max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
                {TV_BRAND_LOGOS.map((brand) => (
                  <div
                    key={brand.name}
                    className="h-14 md:h-16 rounded-lg border border-border bg-background px-2 md:px-3 flex items-center justify-center"
                  >
                    <img
                      src={brand.src}
                      alt={`${brand.name} logo`}
                      className={`h-7 md:h-8 w-full object-contain origin-center ${brand.imageClass}`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = 'inline';
                      }}
                    />
                    <span className="hidden text-xs font-medium text-foreground">{brand.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Показаны не все бренды телевизоров — работаем и с другими производителями.
              </p>
            </div>
            <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-muted aspect-video min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
              <img
                src="/remont-tv/remont-tv-hero.webp"
                alt="Ремонт телевизоров в сервисном центре"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => { (e.target as HTMLImageElement).src = '/serviceCards/tv.webp'; }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-background rounded-xl p-6 border border-border shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Wrench className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-1">Ремонт в сервисном центре</h3>
              <p className="text-sm text-muted-foreground">Профессиональный ремонт с оборудованием и запчастями</p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Package className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-1">Забор техники в сервис</h3>
              <p className="text-sm text-muted-foreground">Удобная доставка техники в сервисный центр</p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-1">Гарантия на работы</h3>
              <p className="text-sm text-muted-foreground">Гарантия на все виды ремонтных работ</p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-1">Диагностика в центре</h3>
              <p className="text-sm text-muted-foreground">Бесплатная диагностика при условии ремонта</p>
            </div>
          </div>

          <div className="mb-16 rounded-xl bg-muted/50 border border-border p-6 md:p-8">
            <h2 className="heading-md mb-4">Какие неисправности телевизоров мы устраняем</h2>
            <p className="text-muted-foreground text-sm md:text-base mb-5">
              Устраняем типовые и сложные неисправности телевизоров в сервисном центре.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-background p-4">
                <h3 className="font-semibold mb-2">Проблемы с питанием и запуском</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Телевизор не включается (блок питания, предохранитель)</li>
                  <li>• Включается и сразу выключается</li>
                  <li>• Самопроизвольная перезагрузка (прошивка, main board)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <h3 className="font-semibold mb-2">Проблемы с изображением</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Есть звук, нет изображения (подсветка LED, инвертор, светодиоды)</li>
                  <li>• Полосы и искажения (матрица, T-CON, шлейф)</li>
                  <li>• Пятна и затемнения (замена подсветки)</li>
                  <li>• Ремонт нижней планки телевизора при полосах матрицы</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <h3 className="font-semibold mb-2">Проблемы со звуком и интерфейсами</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Есть изображение, нет звука (аудиоусилитель, динамики)</li>
                  <li>• Не видит HDMI / нет сигнала (ремонт HDMI/USB, прошивка)</li>
                  <li>• Не ловит каналы (ремонт TV-тюнера)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <h3 className="font-semibold mb-2">Проблемы Smart TV и связи</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Зависает или тормозит (прошивка, сброс, флеш/NAND-память)</li>
                  <li>• Отсутствует Wi‑Fi (ремонт модуля Wi‑Fi)</li>
                </ul>
              </div>
            </div>
            <div className="mt-5 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground">
              Ремонт нижней планки ТВ, замена подсветки, блока питания, main board и матрицы — от 500 ₽.
              Точная стоимость определяется после диагностики.
            </div>
          </div>

          <div className="mb-16">
            <h2 className="heading-md mb-6">Прайс на ремонт телевизоров</h2>
            <p className="text-muted-foreground mb-6">
              Ориентировочные цены. Точная стоимость определяется после диагностики в сервисном центре. Запчасти оплачиваются отдельно.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-xl border border-border shadow-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">Проблема</th>
                    <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">Наименование услуги</th>
                    <th className="text-right p-3 md:p-4 font-semibold whitespace-nowrap text-sm md:text-base">Прайс</th>
                  </tr>
                </thead>
                <tbody>
                  {TV_PRICE_TABLE.map((row, index) => (
                    <tr key={index} className="border-t border-border hover:bg-muted/20">
                      <td className="p-3 md:p-4 text-sm md:text-base">{row.problem}</td>
                      <td className="p-3 md:p-4 text-muted-foreground text-sm">{row.service}</td>
                      <td className="p-3 md:p-4 text-right font-semibold text-primary whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="heading-md mb-6">Частые причины поломок</h2>
            <p className="text-muted-foreground mb-6">
              По статистике ремонтов в сервисном центре чаще всего выходят из строя следующие узлы:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TV_REPAIR_STATS.map((item, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-4 md:p-5 border border-border flex flex-col items-center text-center"
                >
                  <BarChart3 className="text-primary mb-2" size={28} />
                  <span className="font-semibold text-sm md:text-base">{item.label}</span>
                  <span className="text-primary font-bold text-lg mt-1">{item.percent}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="heading-md mb-6">Типы телевизоров</h2>
            <p className="text-muted-foreground mb-6">
              Ремонтируем телевизоры любых типов: ЖК, LED, OLED, QLED, Smart TV, 4K, 8K. Принимаем технику в сервис, проводим диагностику и выполняем ремонт с гарантией.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {TV_TYPES.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  {type}
                </span>
              ))}
            </div>
            <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-md mb-8 aspect-[16/10] min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              <img
                src="/remont-tv/remont-tv-types.webp"
                alt="ЖК, LED, OLED, QLED, Smart TV, 4K, 8K — ремонт в Саранске"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = '/serviceCards/tv.webp'; }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-border rounded-lg p-5 bg-background">
                <h3 className="font-semibold text-lg mb-2">ЖК (LCD) и LED-телевизоры</h3>
                <p className="text-muted-foreground text-sm">
                  Ремонт подсветки, замена матрицы, блоков питания и инверторов. Устраняем полосы на экране, чёрный экран при наличии звука, нестабильное изображение.
                </p>
              </div>
              <div className="border border-border rounded-lg p-5 bg-background">
                <h3 className="font-semibold text-lg mb-2">QLED, OLED, Smart TV, 4K, 8K</h3>
                <p className="text-muted-foreground text-sm">
                  Диагностика и ремонт современных панелей, замена подсветки, ремонт плат управления и блоков питания. Прошивка, Wi‑Fi модули, HDMI. Работаем с техникой Samsung, LG, Sony, TCL, Hisense и других производителей.
                </p>
              </div>
              <div className="border border-border rounded-lg p-5 bg-background">
                <h3 className="font-semibold text-lg mb-2">ТВ-приставки и ресиверы</h3>
                <p className="text-muted-foreground text-sm">
                  Ремонт Smart TV приставок, ресиверов DVB-T2, антенных усилителей. Восстановление после скачков напряжения, замена разъёмов и блоков питания.
                </p>
              </div>
              <div className="border border-border rounded-lg p-5 bg-background">
                <h3 className="font-semibold text-lg mb-2">Марки телевизоров</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Оригинальные и совместимые запчасти, гарантия на работы.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {TV_BRANDS.slice(0, 24).map((brand) => (
                    <span key={brand} className="text-xs bg-muted px-2 py-0.5 rounded">{brand}</span>
                  ))}
                  <span className="text-xs text-muted-foreground self-center">и другие</span>
                </div>
              </div>
            </div>
            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-medium text-primary hover:underline">
                Показать все марки ({TV_BRANDS.length})
              </summary>
              <div className="flex flex-wrap gap-1.5 mt-3 p-4 bg-muted/30 rounded-lg">
                {TV_BRANDS.map((brand) => (
                  <span key={brand} className="text-xs bg-background border border-border px-2 py-1 rounded">{brand}</span>
                ))}
              </div>
            </details>
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

export default RemontTelevizorov;
