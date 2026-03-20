import React from "react";
import { Link } from 'react-router-dom';
import { RasterPicture } from '@/components/common/RasterPicture';

const YANDEX_MAPS_ORG_URL = 'https://yandex.ru/maps/';
const HOROSHEE_MESTO_LOGO_SVG = 'https://logo-teka.com/wp-content/uploads/2026/03/yandex-horoshee-mesto-icon-logo.svg';

const Certificates: React.FC = () => {
  const certificates = [
    {
      id: 1,
      imageSrc: "/brands-img/apple.png",
      altText: "Apple сертификат"
    },
    {
      id: 2,
      imageSrc: "/brands-img/samsung.png",
      altText: "Samsung сертификат"
    },
    {
      id: 3,
      imageSrc: "/brands-img/lenovo.png",
      altText: "Lenovo сертификат"
    },
    {
      id: 4,
      imageSrc: "/brands-img/hp.png",
      altText: "HP сертификат"
    },
    {
      id: 5,
      imageSrc: "/brands-img/acer.png",
      altText: "Acer сертификат"
    }
  ];

  return (
    <div className="bg-secondary/50 rounded-xl p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="heading-md mb-4">Сертификаты и награды</h2>
          <p className="body-md mb-6">
            ПРАЙМ — это сертифицированный сервисный центр, официальный
            партнер ведущих производителей техники. Мы регулярно подтверждаем
            высокий уровень квалификации наших специалистов и качество
            оказываемых услуг.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Сертифицированный сервисный центр Apple</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Авторизованный сервисный центр Samsung</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Партнер Asus, Lenovo, HP и других производителей</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>"Лучший сервисный центр 2022" по версии TechAwards</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Награда Яндекса «Хорошее место — 2026»</span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a
            href={YANDEX_MAPS_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FC3F1D]/10 rounded-lg p-4 flex flex-col items-center justify-center h-32 border border-[#FC3F1D]/30 hover:bg-[#FC3F1D]/15 transition-colors col-span-2"
            title="Награда «Хорошее место» на Яндекс.Картах"
          >
            <img
              src={HOROSHEE_MESTO_LOGO_SVG}
              alt="Логотип награды Яндекс Карты — Хорошее место"
              className="h-12 w-auto object-contain mb-1"
              loading="lazy"
            />
            <span className="text-[#FC3F1D] font-semibold text-sm">Награда Яндекса</span>
            <span className="text-foreground font-bold text-sm mt-0.5">«Хорошее место — 2026»</span>
          </a>
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-background rounded-lg p-4 flex items-center justify-center h-32 border border-border"
            >
              <RasterPicture
                fallbackSrc={cert.imageSrc}
                alt={cert.altText}
                className="max-h-12"
                loading="lazy"
              />
            </div>
          ))}
          <Link to="/brands" onClick={() => window.scrollTo(0, 0)}>
            <div 
              className="bg-background rounded-lg p-4 flex flex-col items-center justify-center h-32 border border-border hover:bg-gray-100 transition-colors"
            >
              <RasterPicture
                fallbackSrc="/models/more.png"
                alt="Другие сертификаты"
                className="max-h-8 mb-2"
                loading="lazy"
              />
              <span className="text-sm font-medium">Другие</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
