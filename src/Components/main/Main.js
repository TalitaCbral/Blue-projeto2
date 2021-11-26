import Home from '../../pages/Home/Home';
import Wish from '../../pages/Wishlist/WishList';
import axios from 'axios'
import './Main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from '../../pages/Game/Game';
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import Profile from '../../pages/Profile/Profile'



axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/wishlist' element={<Wish/>} />
          <Route path='/game' element={<Game/>} />
          <Route path="login" element={<Login/>} />
          <Route path="/register" element={< Register/>} />
          <Route path="/profile" element={< Profile/>} />
        </Routes>      
      </BrowserRouter>
    </>
  );
}