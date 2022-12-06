import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Used to route to new page when tab is clicked
import { GoogleOAuthProvider } from '@react-oauth/google'; // Used for Login feature

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
      {/* ID for Google Login, connects us to Google */}
        <GoogleOAuthProvider clientID="1056099097195-99dd51cblkcjtbo6k91h01g7c5lu2lnb.apps.googleusercontent.com">
          <App /> 
        </GoogleOAuthProvider>
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
