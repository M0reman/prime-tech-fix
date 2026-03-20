import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

// Иконка для Telegram
const TelegramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'Ремонт ТВ', href: '/remont-televizorov' },
    { name: 'Бренды', href: '/brands' },
    { name: 'Блог', href: '/blog' },
    { name: 'О нас', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Контакты', href: '/contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
      scrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'
    )}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="font-bold text-2xl transition-all flex items-center gap-2"
        >
          <img src="/logos/company-logo-square.png" alt="Logo" className="w-8 h-8"></img>
          <span className="text-blue-600">СЦ</span>
          <span className="text-gray-900">ПРАЙМ</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'relative font-medium group text-sm transition-colors hover:text-blue-600',
                location.pathname === item.href ? 'text-blue-600' : 'text-gray-700'
              )}
              onClick={() => window.scrollTo(0, 0)}
            >
              {item.name}
              <span className={cn(
                'absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out',
                location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
              )} />
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          {/* Phone number */}
          <a 
            href="tel:+79297474511"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            <Phone size={16} className="text-blue-600" />
            <span className="text-sm">8 (929) 747-45-11</span>
          </a>
          
          {/* Telegram button */}
          <a 
            href="https://t.me/+79297474511"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
            title="Написать в Telegram"
          >
            <TelegramIcon />
          </a>
          
          <a
            href="https://yandex.ru/maps/-/CPFxnO9M"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-[#FC3F1D]/10 transition-colors"
            title="Награда «Хорошее место» на Яндекс.Картах"
          >
            <img
              src="https://logo-teka.com/wp-content/uploads/2026/03/yandex-horoshee-mesto-icon-logo.svg"
              alt="Хорошее место"
              className="h-7 w-auto object-contain"
            />
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOKGszI-QH3DmP4p7ZAlOxBf0ymz7txD0uMKpxe7jiublTgqAwo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-2 py-1 rounded-md hover:opacity-80 transition-opacity"
            title="Сервисный центр Прайм в MAX"
          >
            <img src="/images/MAX.svg" alt="MAX — канал" className="h-7 w-auto object-contain" />
          </a>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg transition-all hover:bg-blue-700 font-medium"
          >
            Оставить заявку
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 z-40 animate-fade-down">
          <div className="container px-4 sm:px-6 py-5">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'px-3 py-2 rounded-lg font-medium text-lg transition-colors',
                    location.pathname === item.href 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-3 py-2 rounded-lg text-center font-medium"
              >
                Оставить заявку
              </Link>
              
              {/* Mobile phone number */}
              <a 
                href="tel:+79297474511"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-50 text-green-700 font-medium"
              >
                <Phone size={16} />
                <span>8 (929) 747-45-11</span>
              </a>
              
              {/* Mobile Telegram button */}
              <a 
                href="https://t.me/+79297474511"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-500 text-white font-medium"
              >
                <TelegramIcon />
                <span>Telegram</span>
              </a>
              {/* Mobile MAX */}
              <a
                href="https://max.ru/u/f9LHodD0cOKGszI-QH3DmP4p7ZAlOxBf0ymz7txD0uMKpxe7jiublTgqAwo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
                title="Сервисный центр Прайм в MAX"
              >
                <img src="/images/MAX.svg" alt="" className="h-5 w-5" />
                <span>MAX</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
