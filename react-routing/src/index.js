import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRoutes} from "react-router-dom"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRoutes>
      <App />
    </BrowserRoutes>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
