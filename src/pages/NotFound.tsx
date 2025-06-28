import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import HttpStatusHandler from "@/components/common/HttpStatusHandler";

const NotFound = () => {
  const location = useLocation();

  return (
    <HttpStatusHandler status={404}>
      <Helmet>
        <title>404 - Страница не найдена | Сервисный центр Prime в Саранске</title>
        <meta name="description" content="Запрашиваемая страница не найдена. Вернитесь на главную страницу сервисного центра Prime в Саранске." />
        <meta name="robots" content="noindex, nofollow" />
        {/* Open Graph */}
        <meta property="og:title" content="404 - Страница не найдена | Сервисный центр Prime" />
        <meta property="og:description" content="Запрашиваемая страница не найдена. Вернитесь на главную страницу." />
        <meta property="og:type" content="website" />
        {/* Canonical */}
        <link rel="canonical" href="https://serviceprime13.ru/404" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Страница не найдена
            </h2>
            <p className="text-gray-600 mb-8">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild className="w-full">
              <a href="/" className="flex items-center justify-center gap-2">
                <Home size={20} />
                Вернуться на главную
              </a>
            </Button>
            
            <Button variant="outline" asChild className="w-full">
              <a href="/services" className="flex items-center justify-center gap-2">
                <ArrowLeft size={20} />
                Наши услуги
              </a>
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Попробуйте воспользоваться навигацией или свяжитесь с нами:
            </p>
            <div className="mt-4 space-y-2">
              <a 
                href="tel:+79297474511" 
                className="block text-primary hover:underline text-sm"
              >
                📞 8 (929) 747-45-11
              </a>
              <a 
                href="https://t.me/scprime13" 
                className="block text-primary hover:underline text-sm"
              >
                💬 Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </HttpStatusHandler>
  );
};

export default NotFound;
