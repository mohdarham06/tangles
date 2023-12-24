import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';


import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';

import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    
        <ThemeProvider>
            <ToastProvider>

                <Router>
                    <App />
                </Router>

            </ToastProvider>
        </ThemeProvider>

    </React.StrictMode>
);

