import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';

import App from './App.jsx';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
