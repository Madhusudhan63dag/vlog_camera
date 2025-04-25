import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from 'react-ga4';

// Initialize GA4 with your tracking ID
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 measurement ID
ReactGA.initialize('G-9E63ESZQ7Y');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);