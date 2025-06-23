import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, CheckCircle, ExternalLink } from 'lucide-react';

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubscribeClick: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onOpenChange, onSubscribeClick }) => {
  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/scprime13',
      color: 'bg-blue-500 hover:bg-blue-600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    {
      name: 'VK',
      url: 'https://vk.com/scprime',
      color: 'bg-blue-600 hover:bg-blue-700',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.9-1.744-.9-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .661.271.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.203.525-.085.791-.576.791z"/>
        </svg>
      )
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <DialogTitle className="text-center text-xl font-bold">
            Заявка отправлена!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Спасибо! Мы свяжемся с вами в ближайшее время.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-green-800 text-center">
              Наш специалист перезвонит вам в течение 15 минут в рабочее время
            </p>
          </div>
          
          <div className="border-t pt-4">
            <h3 className="text-center font-semibold mb-3">
              🎉 Оставайтесь в курсе наших новостей!
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Подпишитесь на наши группы и получайте эксклюзивные предложения
            </p>
            
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  onClick={() => handleSocialClick(social.url)}
                  className={`w-full ${social.color} text-white flex items-center justify-center gap-3 py-2 text-sm`}
                >
                  {social.icon}
                  <span>Подписаться на {social.name}</span>
                  <ExternalLink size={14} />
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <DialogClose className="absolute right-4 top-4">
          <X className="h-4 w-4" />
          <span className="sr-only">Закрыть</span>
        </DialogClose>
        
        <div className="flex justify-center mt-6">
          <Button 
            onClick={() => onOpenChange(false)}
            className="px-8"
          >
            Отлично!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal; 