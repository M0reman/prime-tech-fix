
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
          <span className="text-primary">PRIME</span>
          <span className="text-foreground">TECH</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'relative font-medium group text-sm transition-colors hover:text-primary',
                location.pathname === item.href ? 'text-primary' : 'text-foreground'
              )}
            >
              {item.name}
              <span className={cn(
                'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ease-out',
                location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
              )} />
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg transition-all hover:bg-primary/90 font-medium"
          >
            Оставить заявку
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
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
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground hover:bg-muted'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-center font-medium"
              >
                Оставить заявку
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
