import React, { useEffect } from 'react';
import { CheckCircle, Package, Shield, Wrench } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import ContactCard from '@/components/common/ContactCard';
import { ROUTES_META } from '@/seo/routesMeta';

const TYPICAL_FAULTS = [
  { name: 'Телевизор не включается, мигает индикатор', price: 'от 900 ₽', desc: 'Блок питания, конденсаторы, прошивка' },
  { name: 'Есть звук, нет изображения (чёрный экран)', price: 'от 600 ₽', desc: 'LED-подсветка, инвертор' },
  { name: 'Полосы, пятна, искажённые цвета на экране', price: 'от 800 ₽', desc: 'Матрица, шлейф, T-CON' },
  { name: 'Нет сигнала, не ловит каналы', price: 'от 600 ₽', desc: 'Тюнер DVB-T2, антенный вход' },
  { name: 'Нет звука или хрипит', price: 'от 700 ₽', desc: 'УНЧ, динамики, шлейф' },
  { name: 'Сам выключается или перезагружается', price: 'от 800 ₽', desc: 'Перегрев, блок питания' },
  { name: 'Не реагирует на пульт ДУ', price: 'от 400 ₽', desc: 'ИК-приёмник, батарейки, Bluetooth-пульт' },
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
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Ремонт телевизоров ЖК, LED, QLED, OLED в сервисном центре Prime. Забор техники в сервис, бесплатная диагностика при ремонте, гарантия на работы.
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

          <div className="mb-16">
            <h2 className="heading-md mb-6">Типичные неисправности телевизоров</h2>
            <p className="text-muted-foreground mb-6">
              Ориентировочные цены на ремонт. Точная стоимость определяется после диагностики в сервисном центре.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-xl border border-border shadow-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-semibold">Неисправность</th>
                    <th className="text-left p-4 font-semibold hidden sm:table-cell">Возможная причина</th>
                    <th className="text-right p-4 font-semibold whitespace-nowrap">Цена от</th>
                  </tr>
                </thead>
                <tbody>
                  {TYPICAL_FAULTS.map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-4">{row.name}</td>
                      <td className="p-4 text-muted-foreground text-sm hidden sm:table-cell">{row.desc}</td>
                      <td className="p-4 text-right font-semibold text-primary whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="heading-md mb-6">Типы телевизоров</h2>
            <p className="text-muted-foreground mb-6">
              Ремонтируем телевизоры любых типов в сервисном центре в Саранске: от классических ЖК до современных OLED. Принимаем технику в сервис, проводим диагностику и выполняем ремонт с гарантией.
            </p>
            <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-md mb-8 aspect-[16/10] min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              <img
                src="/remont-tv/remont-tv-types.webp"
                alt="ЖК, LED и OLED телевизоры — ремонт в Саранске"
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
                <h3 className="font-semibold text-lg mb-2">QLED и OLED</h3>
                <p className="text-muted-foreground text-sm">
                  Диагностика и ремонт современных панелей, замена подсветки, ремонт плат управления и блоков питания. Работаем с техникой Samsung, LG, Sony и других производителей.
                </p>
              </div>
              <div className="border border-border rounded-lg p-5 bg-background">
                <h3 className="font-semibold text-lg mb-2">ТВ-приставки и ресиверы</h3>
                <p className="text-muted-foreground text-sm">
                  Ремонт Smart TV приставок, ресиверов DVB-T2, антенных усилителей. Восстановление после скачков напряжения, замена разъёмов и блоков питания.
                </p>
              </div>
              <div className="border border-border rounded-lg p-5 bg-background">
                <h3 className="font-semibold text-lg mb-2">Бренды</h3>
                <p className="text-muted-foreground text-sm">
                  Samsung, LG, Sony, Philips, Xiaomi, BBK, Hyundai, Telefunken, Rolsen, Supra и другие. Оригинальные и совместимые запчасти, гарантия на работы.
                </p>
              </div>
            </div>
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
