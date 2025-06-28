import React from "react";
import { Link } from 'react-router-dom';

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
            PRIME TECH — это сертифицированный сервисный центр, официальный
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
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-background rounded-lg p-4 flex items-center justify-center h-32 border border-border"
            >
              <img 
                src={cert.imageSrc} 
                alt={cert.altText} 
                className="max-h-12" 
              />
            </div>
          ))}
          <Link to="/brands" onClick={() => window.scrollTo(0, 0)}>
            <div 
              className="bg-background rounded-lg p-4 flex flex-col items-center justify-center h-32 border border-border hover:bg-gray-100 transition-colors"
            >
              <img 
                src="/models/more.png" 
                alt="Другие сертификаты" 
                className="max-h-8 mb-2"
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
