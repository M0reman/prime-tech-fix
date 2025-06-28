import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface HttpStatusHandlerProps {
  status: number;
  children: React.ReactNode;
}

const HttpStatusHandler: React.FC<HttpStatusHandlerProps> = ({ status, children }) => {
  const location = useLocation();

  useEffect(() => {
    // Устанавливаем HTTP статус для страницы
    if (status === 404) {
      // Для 404 страниц устанавливаем специальный заголовок
      document.title = "404 - Страница не найдена | Сервисный центр Prime";
      
      // Логируем 404 ошибку
      console.error(`404 Error: ${location.pathname}`);
      
      // Отправляем событие в аналитику
      if (window.ym) {
        window.ym(102922166, 'reachGoal', '404_error', { 
          path: location.pathname,
          referrer: document.referrer 
        });
      }
    }
  }, [status, location.pathname]);

  return <>{children}</>;
};

export default HttpStatusHandler; 