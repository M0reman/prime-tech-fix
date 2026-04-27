import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import App from './App';
import './index.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

declare global {
  interface Window {
    __PRELOADED_STATE__?: { blogPost?: unknown };
  }
}

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
if (import.meta.env.PROD && !recaptchaSiteKey) {
  throw new Error('VITE_RECAPTCHA_SITE_KEY должен быть задан в переменных окружения для продакшен-сборки.');
}
const recaptchaKey = recaptchaSiteKey || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
const preloaded = window.__PRELOADED_STATE__;

const rootEl = document.getElementById('root')!;
const app = (
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <BrowserRouter>
        <App preloadedBlogPost={preloaded?.blogPost ?? null} />
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);

const hasServerContent =
  rootEl.childNodes.length > 1 ||
  (rootEl.childNodes.length === 1 && rootEl.firstChild?.nodeType === Node.ELEMENT_NODE);

if (hasServerContent) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
