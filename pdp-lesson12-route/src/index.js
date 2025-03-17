import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PdpApp from './PdpApp';
import "bootstrap/dist/css/bootstrap.min.css";
const PdpRoot = ReactDOM.createRoot(document.getElementById('PdpRoot'));
PdpRoot.render(
  <React.StrictMode>
      <PdpApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
