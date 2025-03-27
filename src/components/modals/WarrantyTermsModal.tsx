
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
import { X } from 'lucide-react';

interface WarrantyTermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WarrantyTermsModal: React.FC<WarrantyTermsModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Условия гарантии</DialogTitle>
          <DialogDescription>
            Гарантийная политика сервисного центра PRIME TECH
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 text-foreground">
          <h3 className="text-lg font-semibold">1. Общие положения</h3>
          <p>
            Сервисный центр PRIME TECH предоставляет гарантию на все выполненные работы и установленные запчасти. 
            Срок гарантии зависит от типа ремонта и устанавливается в момент выдачи устройства клиенту.
          </p>
          
          <h3 className="text-lg font-semibold">2. Сроки гарантии</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ремонт мобильных устройств (смартфоны, планшеты) — 6 месяцев</li>
            <li>Ремонт компьютеров и ноутбуков — 12 месяцев</li>
            <li>Ремонт бытовой техники — 6 месяцев</li>
            <li>Ремонт телевизоров и мониторов — 12 месяцев</li>
            <li>Программное обеспечение — 30 дней</li>
          </ul>
          
          <h3 className="text-lg font-semibold">3. Что входит в гарантию</h3>
          <p>
            Гарантия распространяется на:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Неисправности, связанные с произведенным ремонтом</li>
            <li>Установленные комплектующие и запчасти</li>
            <li>Качество выполненных работ</li>
          </ul>
          
          <h3 className="text-lg font-semibold">4. Что не входит в гарантию</h3>
          <p>
            Гарантия не распространяется на:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Механические повреждения устройства после выдачи из ремонта</li>
            <li>Попадание влаги или других жидкостей</li>
            <li>Нарушение температурного режима эксплуатации</li>
            <li>Самостоятельный ремонт или вмешательство в работу устройства</li>
            <li>Повреждения, вызванные перепадами напряжения в электросети</li>
            <li>Повреждения, вызванные форс-мажорными обстоятельствами (пожар, наводнение и т.д.)</li>
          </ul>
          
          <h3 className="text-lg font-semibold">5. Порядок обращения по гарантии</h3>
          <p>
            В случае обнаружения неисправности в гарантийный период:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Обратитесь в наш сервисный центр с устройством и гарантийным талоном</li>
            <li>Наши специалисты проведут диагностику и определят, является ли случай гарантийным</li>
            <li>При подтверждении гарантийного случая ремонт будет произведен бесплатно</li>
          </ul>
          
          <h3 className="text-lg font-semibold">6. Дополнительные условия</h3>
          <p>
            PRIME TECH оставляет за собой право отказать в гарантийном обслуживании при нарушении пользователем правил эксплуатации устройства или условий гарантии.
            Гарантийный срок не продлевается на время нахождения устройства в ремонте.
          </p>
        </div>
        
        <DialogClose className="absolute right-4 top-4">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <div className="flex justify-end mt-6">
          <Button onClick={() => onOpenChange(false)}>Закрыть</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WarrantyTermsModal;
