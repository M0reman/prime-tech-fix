import React, { useEffect } from 'react';
import SEOHead from '@/components/common/SEOHead';
import ContactCard from '@/components/common/ContactCard';
import { ROUTES_META } from '@/seo/routesMeta';
import { publicUrl } from '@/lib/publicUrl';
import {
  LAPTOP_ADVANTAGES,
  LAPTOP_BRANDS,
  LAPTOP_MALFUNCTION_GROUPS,
} from '@/data/laptopRepairLandingData';

const HERO_FALLBACK = '/models/more.webp';

const RemontNoutbukov: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = ROUTES_META['/remont-noutbukov'];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        url="/remont-noutbukov"
      />
      <section className="py-12 md:py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Ремонт в сервисном центре
            </span>
            <h1 className="heading-lg mb-4">Ремонт ноутбуков в Саранске</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Диагностика и ремонт ноутбуков в сервисном центре Прайм: материнская плата, матрица, клавиатура, разъёмы, охлаждение, после залития. Согласуем стоимость до начала работ.
            </p>
            <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-muted aspect-video min-h-[200px] sm:min-h-[240px] md:min-h-[280px] mb-12">
              <img
                src={publicUrl('/remont-noutbukov/remont-noutbukov-hero.webp')}
                alt="Ремонт ноутбуков в сервисном центре"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = publicUrl(HERO_FALLBACK);
                }}
              />
            </div>
          </div>

          <div className="mb-16 md:mb-20">
            <h2 className="heading-md text-center mb-3">Осуществляем ремонт ноутбуков любых брендов</h2>
            <p className="text-center text-muted-foreground text-sm md:text-base mb-8 max-w-2xl mx-auto">
              Работаем с популярными и редкими производителями. Показаны не все бренды — принимаем и другую технику.
            </p>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-4 md:gap-x-4 md:gap-y-5">
                {LAPTOP_BRANDS.map((brand) => (
                  <div key={brand.name} className="flex flex-col items-center text-center">
                    <div className="w-full rounded-lg border border-border bg-background p-3 md:p-4 flex items-center justify-center min-h-[88px] md:min-h-[96px]">
                      {brand.logoSrc ? (
                        <>
                          <img
                            src={publicUrl(brand.logoSrc)}
                            alt={`Логотип ${brand.name}`}
                            className="h-9 md:h-10 w-full max-w-[132px] object-contain"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
                              if (fb) fb.classList.remove('hidden');
                            }}
                          />
                          <span className="hidden text-sm font-semibold text-foreground">{brand.name}</span>
                        </>
                      ) : (
                        <span className="text-sm font-semibold text-foreground">{brand.name}</span>
                      )}
                    </div>
                    <span className="mt-2 text-[11px] md:text-xs text-muted-foreground leading-snug px-0.5">
                      Ремонт ноутбука {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16 md:mb-20">
            <h2 className="heading-md text-center mb-3">Устраним любую неисправность</h2>
            <p className="text-center text-muted-foreground text-sm md:text-base mb-8 max-w-2xl mx-auto">
              Ориентировочные цены; итоговая стоимость — после диагностики в сервисном центре.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {LAPTOP_MALFUNCTION_GROUPS.map((group) => {
                const Icon = group.Icon;
                return (
                  <div
                    key={group.title}
                    className="rounded-xl border border-border bg-muted/30 p-4 md:p-6"
                  >
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="text-primary" size={20} aria-hidden />
                      </div>
                      <h3 className="font-semibold text-base md:text-lg">{group.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li
                          key={item.label}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 rounded-lg bg-background border border-border px-3 py-2.5"
                        >
                          <span className="text-sm text-foreground">{item.label}</span>
                          <span className="text-sm font-semibold text-primary whitespace-nowrap shrink-0">
                            {item.priceFrom}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-8 md:mb-12">
            <h2 className="heading-md text-center mb-8">Наши преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {LAPTOP_ADVANTAGES.map(({ title, body, Icon }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-xl border border-border bg-background p-5 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="text-primary" size={22} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-2 leading-snug">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
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

export default RemontNoutbukov;
