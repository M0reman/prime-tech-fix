import React from 'react';

const CompanyLogos: React.FC = () => {
  const companies = [
    {
      name: 'Apple',
      logo: '/brands-img/apple.png'
    },
    {
      name: 'Samsung',
      logo: '/brands-img/samsung.png'
    },
    {
      name: 'Xiaomi',
      logo: '/brands-img/xiaomi.png'
    },
    {
      name: 'Huawei',
      logo: '/brands-img/huawei.png'
    },
    {
      name: 'ASUS',
      logo: '/brands-img/asus.png'
    }
  ];

  return (
    <section className="py-5 lg:py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Наши партнеры
          </span>
          <h2 className="heading-lg mb-4 text-gray-900">Работаем с ведущими брендами</h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            Мы являемся официальными партнерами крупнейших производителей техники и предоставляем качественный сервис
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-12 w-auto object-contain filter transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
