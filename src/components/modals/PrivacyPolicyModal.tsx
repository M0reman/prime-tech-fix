
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
            Политика в отношении обработки персональных данных
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 text-foreground">
          <p className="italic">Последнее обновление: {new Date().toLocaleDateString()}</p>
          
          <h3 className="text-lg font-semibold">1. Общие положения</h3>
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта и клиентов сервисного центра PRIME.
            Мы уважаем ваше право на конфиденциальность и стремимся обеспечить максимальную защиту ваших персональных данных.
          </p>
          
          <h3 className="text-lg font-semibold">2. Собираемая информация</h3>
          <p>
            Мы можем собирать следующие типы персональных данных:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Контактная информация (имя, номер телефона, email)</li>
            <li>Информация об устройстве (модель, серийный номер, IMEI)</li>
            <li>История обращений и ремонтов</li>
            <li>Данные о посещении сайта (IP-адрес, cookies, информация о браузере)</li>
          </ul>
          
          <h3 className="text-lg font-semibold">3. Цели сбора персональных данных</h3>
          <p>
            Персональные данные собираются и обрабатываются в следующих целях:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Оказание услуг по ремонту и обслуживанию техники</li>
            <li>Информирование о статусе ремонта</li>
            <li>Улучшение качества обслуживания</li>
            <li>Проведение маркетинговых исследований</li>
            <li>Отправка информационных и рекламных материалов (при наличии согласия)</li>
          </ul>
          
          <h3 className="text-lg font-semibold">4. Принципы обработки персональных данных</h3>
          <p>
            Обработка персональных данных основана на следующих принципах:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Законность и справедливость обработки</li>
            <li>Обработка только тех данных, которые необходимы для заявленных целей</li>
            <li>Точность и актуальность данных</li>
            <li>Ограничение сроков хранения данных</li>
            <li>Конфиденциальность и безопасность обработки</li>
          </ul>
          
          <h3 className="text-lg font-semibold">5. Права пользователей</h3>
          <p>
            В соответствии с законодательством РФ, вы имеете право:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Получать информацию о хранящихся персональных данных</li>
            <li>Требовать уточнения, блокирования или удаления данных</li>
            <li>Отозвать согласие на обработку персональных данных</li>
            <li>Обжаловать действия или бездействие оператора персональных данных</li>
          </ul>
          
          <h3 className="text-lg font-semibold">6. Безопасность данных</h3>
          <p>
            PRIME TECH принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, уничтожения, изменения, блокирования и других неправомерных действий.
          </p>
          
          <h3 className="text-lg font-semibold">7. Передача данных третьим лицам</h3>
          <p>
            Мы не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, когда это необходимо для выполнения договорных обязательств или требуется по закону.
          </p>
          
          <h3 className="text-lg font-semibold">8. Изменение Политики конфиденциальности</h3>
          <p>
            PRIME TECH оставляет за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия всегда доступна на нашем сайте.
          </p>
          
          <h3 className="text-lg font-semibold">9. Контактная информация</h3>
          <p>
            По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>По телефону: 8 (800) 123-45-67</li>
            <li>По электронной почте: privacy@primetech.ru</li>
            <li>По адресу: г. Москва, ул. Техническая, д. 1, офис 123</li>
          </ul>
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

export default PrivacyPolicyModal;
