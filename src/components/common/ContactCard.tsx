
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactCard: React.FC = () => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-10 relative overflow-hidden shadow-sm">
      <div className="absolute w-64 h-64 rounded-full bg-primary/10 -top-32 -right-32 blur-3xl pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-primary/5 -bottom-32 -left-32 blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="heading-lg mb-4">Нужна помощь с ремонтом?</h2>
        <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время для консультации и решения вашей проблемы
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link to="/contact">
              Оставить заявку
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:+78001234567">
              8 (800) 123-45-67
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
