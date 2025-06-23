import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, X } from 'lucide-react';

const UrgencyBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const distance = endOfDay.getTime() - now;
      
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-2 md:py-3 md:px-4 shadow-lg animate-fade-in">
      <button
        className="absolute right-2 top-2 sm:right-4 sm:top-4 p-1 rounded hover:bg-white/20 transition-colors focus:outline-none"
        aria-label="Скрыть баннер"
        onClick={() => setVisible(false)}
        style={{ zIndex: 51 }}
      >
        <X size={20} />
      </button>
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto mb-1 sm:mb-0">
          <div className="flex items-center justify-center gap-2 w-full">
            <AlertTriangle size={18} className="animate-pulse flex-shrink-0" />
            <span className="font-medium whitespace-nowrap">🔥 СРОЧНО! Скидка 10% на ремонт <span className="uppercase">телевизоров</span> до конца дня!</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto">
          <div className="flex items-center justify-center gap-2 w-full">
            <Clock size={14} className="flex-shrink-0" />
            <span>Осталось:</span>
            <div className="flex gap-1">
              <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
        <a 
          href="tel:+79297474511"
          className="bg-white text-red-500 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto mt-2 sm:mt-0 text-center"
        >
          ЗАКАЗАТЬ СЕЙЧАС
        </a>
      </div>
    </div>
  );
};

export default UrgencyBanner; 