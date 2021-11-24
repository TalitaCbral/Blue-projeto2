import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

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