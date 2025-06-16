
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactCard: React.FC = () => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 relative overflow-hidden shadow-md text-white">
      <div className="absolute w-64 h-64 rounded-full bg-blue-500/30 -top-32 -right-32 blur-3xl pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-blue-700/30 -bottom-32 -left-32 blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="heading-lg mb-4 text-white">Нужна помощь с ремонтом?</h2>
        <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время для консультации и решения вашей проблемы
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="gap-2 bg-white text-blue-700 hover:bg-blue-50">
            <Link to="/contact">
              Оставить заявку
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-blue-700/30">
            <a href="tel:+79297474511" className="font-medium">
              8 (929) 747-45-11
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
