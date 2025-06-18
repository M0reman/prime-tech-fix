import { type ContactFormData } from './validations';
import { VITE_API_URL } from './server';

console.log('VITE_API_URL:', VITE_API_URL);

export const sendTelegramMessage = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch(`${VITE_API_URL}/api/send-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error sending message:', error);
    return false;
  }
}; 