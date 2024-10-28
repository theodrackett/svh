import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.scss';
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <GoogleOAuthProvider clientId="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">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>);
