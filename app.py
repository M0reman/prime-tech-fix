from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Конфигурация из переменных окружения
TELEGRAM_BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')
TELEGRAM_CHAT_ID = os.getenv('TELEGRAM_CHAT_ID')
ALLOWED_ORIGINS = os.getenv('ALLOWED_ORIGINS', 'http://localhost:5173').split(',')

def validate_contact_form(data):
    required_fields = ['name', 'phone', 'message']
    for field in required_fields:
        if not data.get(field):
            return False, f'Missing required field: {field}'
    return True, None

@app.route('/api/send-message', methods=['POST'])
def send_message():
    try:
        data = request.json
        is_valid, error = validate_contact_form(data)
        
        if not is_valid:
            return jsonify({'success': False, 'error': error}), 400
        
        # Формирование сообщения
        message = f"""
🆕 Новая заявка с сайта!

👤 Имя: {data['name']}
📱 Телефон: {data['phone']}
📧 Email: {data.get('email', 'Не указан')}
🔧 Устройство: {data.get('device', 'Не указано')}
📝 Сообщение: {data['message']}
        """.strip()

        # Отправка в Telegram
        response = requests.post(
            f'https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage',
            json={
                'chat_id': TELEGRAM_CHAT_ID,
                'text': message,
                'parse_mode': 'HTML'
            }
        )
        
        response.raise_for_status()
        return jsonify({'success': True})

    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000) 