import React from 'react';

const YandexReviews: React.FC = () => {
  const linkStyle: React.CSSProperties = {
    boxSizing: 'border-box',
    textDecoration: 'none',
    color: '#b3b3b3',
    fontSize: '10px',
    fontFamily: '"YS Text", sans-serif',
    position: 'absolute',
    bottom: '8px',
    width: '100%',
    textAlign: 'center',
    left: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    maxHeight: '14px',
    whiteSpace: 'nowrap',
    padding: '0 16px',
  };

  return (
    <section className="py-5 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Отзывы с Яндекса
          </span>
          <h2 className="heading-lg mb-4 text-gray-900">Что говорят наши клиенты</h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            Реальные отзывы клиентов о качестве наших услуг с Яндекс.Карт
          </p>
        </div>

        <div 
          style={{
            width: '100%',
            maxWidth: '560px',
            height: '800px', 
            overflow: 'hidden', 
            position: 'relative', 
            margin: '0 auto'
          }}
        >
          <iframe 
            style={{width: '100%', height: '100%', border: '1px solid #e6e6e6', borderRadius: '8px', boxSizing: 'border-box'}} 
            src="https://yandex.ru/maps-reviews-widget/1205449112?comments"
            title="Отзывы на Яндекс.Картах"
            loading="lazy"
          ></iframe>
          <a 
            href="https://yandex.ru/maps/org/praym/1205449112/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Прайм на карте Саранска — Яндекс&nbsp;Карты
          </a>
        </div>
      </div>
    </section>
  );
};

export default YandexReviews;
