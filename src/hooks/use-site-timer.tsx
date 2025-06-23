import { useState, useEffect, useCallback } from 'react';

interface UseSiteTimerOptions {
  // Время в миллисекундах, после которого показать модальное окно
  showModalAfter: number;
  // Ключ для localStorage, чтобы не показывать модальное окно повторно
  storageKey?: string;
  // Показывать ли модальное окно только один раз за сессию
  showOnce?: boolean;
}

interface UseSiteTimerReturn {
  shouldShowModal: boolean;
  timeSpent: number;
  resetTimer: () => void;
  hideModal: () => void;
}

const useSiteTimer = (options: UseSiteTimerOptions): UseSiteTimerReturn => {
  const { 
    showModalAfter, 
    storageKey = 'subscription-modal-shown', 
    showOnce = true 
  } = options;

  const [timeSpent, setTimeSpent] = useState(0);
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [isActive, setIsActive] = useState(true);

  // Проверяем, было ли уже показано модальное окно
  const hasBeenShown = useCallback(() => {
    if (!showOnce) return false;
    try {
      return localStorage.getItem(storageKey) === 'true';
    } catch {
      return false;
    }
  }, [storageKey, showOnce]);

  // Отмечаем, что модальное окно было показано
  const markAsShown = useCallback(() => {
    if (!showOnce) return;
    try {
      localStorage.setItem(storageKey, 'true');
    } catch {
      // Игнорируем ошибки localStorage
    }
  }, [storageKey, showOnce]);

  // Сброс таймера
  const resetTimer = useCallback(() => {
    setTimeSpent(0);
    setShouldShowModal(false);
    setIsActive(true);
  }, []);

  // Скрыть модальное окно
  const hideModal = useCallback(() => {
    setShouldShowModal(false);
    markAsShown();
  }, [markAsShown]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && !hasBeenShown()) {
      interval = setInterval(() => {
        setTimeSpent(prev => {
          const newTime = prev + 1000;
          
          // Проверяем, нужно ли показать модальное окно
          if (newTime >= showModalAfter && !shouldShowModal) {
            setShouldShowModal(true);
            setIsActive(false); // Останавливаем таймер
          }
          
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, showModalAfter, shouldShowModal, hasBeenShown]);

  // Останавливаем таймер при неактивности вкладки
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return {
    shouldShowModal,
    timeSpent,
    resetTimer,
    hideModal
  };
};

export default useSiteTimer; 