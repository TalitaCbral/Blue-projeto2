import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'application/jason'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);