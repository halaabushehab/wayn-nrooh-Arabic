import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './i18n'; 

createRoot(document.getElementById('root')).render(
   <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <App />
    </GoogleOAuthProvider>,

    
);
