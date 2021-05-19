import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4eMltGhxOW2nMYTc7Jy2-Ovd5IqwepO4",
  authDomain: "fullstackreact-ac1fc.firebaseapp.com",
  projectId: "fullstackreact-ac1fc",
  storageBucket: "fullstackreact-ac1fc.appspot.com",
  messagingSenderId: "198954854467",
  appId: "1:198954854467:web:2c8cc79c782e1978954cf6",
  measurementId: "G-QQJ9K07BBE"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
