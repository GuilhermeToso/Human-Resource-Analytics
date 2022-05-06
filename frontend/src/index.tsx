import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Global from './Styles/Global';
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Global></Global>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

