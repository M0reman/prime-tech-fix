import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    { name: 'Бренды', href: '/brands' },
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
          <span className="text-gray-900">PRIME</span>
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
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
