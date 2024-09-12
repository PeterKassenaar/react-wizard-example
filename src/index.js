import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// Bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

// Root Component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
