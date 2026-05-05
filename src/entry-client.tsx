import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/latin-400.css';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root')!;
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
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
