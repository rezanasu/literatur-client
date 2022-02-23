import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

export const RootContext = createContext();
const Provider = RootContext.Provider;
const state = {
  access_token: localStorage.getItem("access_token"),
  books: [],
  user_books: [],
  user_favourites: [],
  user_wishlist: []
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider value={state}>
        <App /> 
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
