
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12 mt-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="font-bold text-2xl flex items-center gap-1">
              <span className="text-primary">PRIME</span>
              <span className="text-foreground">TECH</span>
            </Link>
            <p className="text-muted-foreground mt-2">
              Профессиональный ремонт цифровой и бытовой техники с гарантией качества
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ремонт телефонов
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ремонт ноутбуков
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ремонт планшетов
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ремонт компьютеров
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ремонт бытовой техники
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Условия гарантии
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+78001234567" className="hover:text-primary transition-colors">
                    8 (800) 123-45-67
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@primetech.ru" className="hover:text-primary transition-colors">
                    info@primetech.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  г. Москва, ул. Техническая, д. 1, офис 123
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  Пн-Пт: 9:00-20:00<br />
                  Сб-Вс: 10:00-18:00
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} PRIME TECH. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
