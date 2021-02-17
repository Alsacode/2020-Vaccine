import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck }  from 'reactfire';
import StartUp from './components/startup';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1QCq9S1MxkyYiRX3B8gS-CTFuUPJop4Q",
  authDomain: "global-vaccine-map.firebaseapp.com",
  projectId: "global-vaccine-map",
  storageBucket: "global-vaccine-map.appspot.com",
  messagingSenderId: "279067061053",
  appId: "1:279067061053:web:f460d67a6708d370ba7354",
  measurementId: "G-EZTRXFEGWQ"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthCheck fallback={<StartUp />}>
      <App />
      </AuthCheck>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
