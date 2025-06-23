import React, { useEffect } from 'react';

// Типы для JivoSite API
declare global {
  interface Window {
    jivo_api?: {
      setPosition?: (position: string) => void;
      setTheme?: (theme: string) => void;
    };
  }
}

interface JivoSiteProps {
  widgetId?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark';
}

const JivoSite: React.FC<JivoSiteProps> = ({ 
  widgetId = 'kIqNde6zI1', // Реальный Widget ID
  position = 'bottom-right',
  theme = 'light'
}) => {
  useEffect(() => {
    // Проверяем, не загружен ли уже JivoSite
    if (window.jivo_api) {
      console.log('JivoSite уже загружен');
      return;
    }

    // Создаем скрипт JivoSite с правильным URL
    const script = document.createElement('script');
    script.src = `//code.jivo.ru/widget/${widgetId}`;
    script.async = true;
    
    // Добавляем обработчик ошибок
    script.onerror = () => {
      console.error('Ошибка загрузки JivoSite');
    };

    // Добавляем обработчик успешной загрузки
    script.onload = () => {
      console.log('JivoSite успешно загружен');
      
      // Дополнительные настройки после загрузки
      if (window.jivo_api) {
        // Настройка позиции (если поддерживается)
        // window.jivo_api.setPosition?.(position);
        
        // Настройка темы (если поддерживается)
        // window.jivo_api.setTheme?.(theme);
      }
    };

    document.head.appendChild(script);

    // Cleanup при размонтировании компонента
    return () => {
      const existingScript = document.querySelector('script[src*="jivo.ru"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [widgetId, position, theme]);

  return null; // Компонент не рендерит ничего видимого
};

export default JivoSite; 