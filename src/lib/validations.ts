import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(50, 'Имя не должно превышать 50 символов')
    .regex(/^[а-яА-ЯёЁ\s-]+$/, 'Имя должно содержать только русские буквы, пробелы и дефис'),
  
  phone: z.string()
    .regex(/^\+7\s?\(?[0-9]{3}\)?\s?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/, 'Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX'),
  
  email: z.string()
    .email('Введите корректный email адрес')
    .optional()
    .or(z.literal('')),
  
  device: z.string()
    .max(100, 'Название устройства не должно превышать 100 символов')
    .optional()
    .or(z.literal('')),
  
  message: z.string()
    .min(10, 'Сообщение должно содержать минимум 10 символов')
    .max(1000, 'Сообщение не должно превышать 1000 символов'),

  gRecaptchaToken: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>; 