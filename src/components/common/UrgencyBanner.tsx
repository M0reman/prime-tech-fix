import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, X } from 'lucide-react';

/** Конец рабочего дня в локальной таймзоне: Пн–Пт 19:00, Сб 14:00, Вс — выходной */
function getEndOfWorkToday(now: Date): Date | null {
  const day = now.getDay();
  if (day === 0) return null;
  const end = new Date(now);
  end.setMilliseconds(0);
  if (day >= 1 && day <= 5) {
    end.setHours(19, 0, 0, 0);
    return end;
  }
  if (day === 6) {
    end.setHours(14, 0, 0, 0);
    return end;
  }
  return null;
}

const UrgencyBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [timerMode, setTimerMode] = useState<'counting' | 'sunday' | 'afterHours'>('counting');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = getEndOfWorkToday(now);
      if (!end) {
        setTimerMode('sunday');
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const distance = end.getTime() - now.getTime();
      if (distance <= 0) {
        setTimerMode('afterHours');
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimerMode('counting');
      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-2 left-0 w-full z-50 px-2 md:px-4 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <div className="relative rounded-2xl border border-white/20 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white shadow-2xl backdrop-blur-sm">
          <button
            className="absolute right-2 top-2 sm:right-3 sm:top-3 p-1.5 rounded-full hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Скрыть баннер"
            onClick={() => setVisible(false)}
          >
            <X size={18} />
          </button>

          <div className="px-3 py-2.5 sm:px-4 sm:py-3 pr-10 sm:pr-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-2.5 lg:gap-4">
              <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] sm:text-xs font-semibold tracking-wide uppercase shrink-0">
                  <AlertTriangle size={18} className="animate-pulse" />
                  Акция дня
                </span>
                <p className="text-xs sm:text-sm md:text-base leading-snug font-medium max-w-[44rem]">
                  Скидка 10% на ремонт телевизоров в СЦ Прайм
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] sm:text-sm">
                  <Clock size={16} className="shrink-0" />
                  {timerMode === 'sunday' ? (
                    <span className="opacity-95 font-medium">Сегодня выходной</span>
                  ) : timerMode === 'afterHours' ? (
                    <span className="opacity-95 font-medium">Рабочий день завершён</span>
                  ) : (
                    <>
                      <span className="opacity-95 shrink-0">До конца акции:</span>
                      <div className="flex items-center justify-center gap-1 font-mono">
                        <span className="min-w-7 sm:min-w-8 text-center bg-white/20 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md">
                          {timeLeft.hours.toString().padStart(2, '0')}
                        </span>
                        <span>:</span>
                        <span className="min-w-7 sm:min-w-8 text-center bg-white/20 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md">
                          {timeLeft.minutes.toString().padStart(2, '0')}
                        </span>
                        <span>:</span>
                        <span className="min-w-7 sm:min-w-8 text-center bg-white/20 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md">
                          {timeLeft.seconds.toString().padStart(2, '0')}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <a
                  href="tel:+79297474511"
                  className="relative z-10 inline-flex w-full sm:w-auto items-center justify-center whitespace-nowrap rounded-lg bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors shadow-md shrink-0"
                >
                  Получить скидку
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner; 