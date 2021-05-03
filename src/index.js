import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './scss/custom.scss'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history'

localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMywiZXhwIjoxNjIwMzgwNTA1fQ.tZpUAezlArp7z6uHFfwDmae9xI8IxY4oCKSIyNuaeas')
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
