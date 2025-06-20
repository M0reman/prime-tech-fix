import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

if (!recaptchaSiteKey) {
  throw new Error("VITE_RECAPTCHA_SITE_KEY is not defined in your environment variables. Please add it to your .env file.");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
