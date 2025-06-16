import { type ContactFormData } from './validations';
import { TELEGRAM_CONFIG } from '@/config';

export const sendTelegramMessage = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const message = `
🆕 Новая заявка с сайта!

👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
📧 Email: ${formData.email || 'Не указан'}
🔧 Устройство: ${formData.device || 'Не указано'}
📝 Сообщение: ${formData.message}
    `.trim();

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return true;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return false;
  }
}; 