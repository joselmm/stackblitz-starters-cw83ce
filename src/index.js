import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
/* Bootstrap style sheet */
import 'bootstrap/dist/css/bootstrap';
/* Bootstrap icons style sheet */
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
