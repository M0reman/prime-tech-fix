import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { PrivacyPolicyBody } from '@/components/legal/PrivacyPolicyBody';

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Политика конфиденциальности</DialogTitle>
          <DialogDescription>
            Политика в отношении обработки персональных данных и текстовых файлов браузера. Полная версия на странице{' '}
            <Link to="/privacy" className="text-primary underline" onClick={() => onOpenChange(false)}>
              /privacy
            </Link>
            .
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 text-foreground">
          <PrivacyPolicyBody />
        </div>

        <DialogClose className="absolute right-4 top-4">
          <X className="h-4 w-4" />
          <span className="sr-only">Закрыть</span>
        </DialogClose>

        <div className="flex justify-end mt-6">
          <Button onClick={() => onOpenChange(false)}>Закрыть</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
