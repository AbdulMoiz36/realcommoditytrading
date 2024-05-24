import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Google library
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GoogleOAuthProvider clientId='565842212178-doot3vlja3pb58qa1gpt9np9jeb5et5n.apps.googleusercontent.com'>
<React.StrictMode>
    <App />
  </React.StrictMode>
    </GoogleOAuthProvider>
);

reportWebVitals();
