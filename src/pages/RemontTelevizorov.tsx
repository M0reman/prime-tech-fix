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
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
              Работаем с марками: Samsung, LG, Sony, TCL, Hisense, Philips, Xiaomi, BBK, Hyundai, Telefunken, Яндекс, Sber и другими.
            </p>
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
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              В сервисном центре Прайм выполняют ремонт телевизоров при любых типичных неисправностях: телевизор не включается (блок питания, предохранитель); есть звук, нет изображения — замена подсветки LED, инверторов, светодиодов; есть изображение, нет звука — замена аудиоусилителей и динамиков; телевизор включается и сразу выключается; полосы на экране и искажения — замена матрицы, ремонт T-CON и шлейфа; ремонт нижней планки телевизора при полосах на матрице; не видит HDMI, нет сигнала — замена разъёмов HDMI и USB, прошивка; зависает или тормозит — прошивка, сброс настроек, замена флеш- и NAND-памяти; пятна и затемнения — замена подсветки; сам перезагружается — прошивка, main board; не ловит каналы — ремонт TV-тюнера; отсутствует Wi‑Fi — ремонт модуля Wi‑Fi. Ремонт нижней планки ТВ и нижней планки телевизора, замена подсветки, блока питания, main board и матрицы — по прайсу от 500 ₽. Точная цена после диагностики.
            </p>
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
            <p className="text-muted-foreground text-sm mt-4">
              Замена матрицы — один из самых дорогостоящих видов ремонта; остальные неисправности чаще устраняются в диапазоне от 700 до 2 500 ₽ (без учёта запчастей).
            </p>
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
