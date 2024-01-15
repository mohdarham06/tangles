import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>


        <DataProvider>
            <ThemeProvider>
                <ToastProvider>


                    <Router>
                        <App />
                    </Router>


                </ToastProvider>
            </ThemeProvider>
        </DataProvider>


    </React.StrictMode>
);

