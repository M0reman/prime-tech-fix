import { type ContactFormData } from './validations';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

console.log(API_URL);

export const sendTelegramMessage = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/api/send-message`, {
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