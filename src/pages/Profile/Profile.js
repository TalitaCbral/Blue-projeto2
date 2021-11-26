import './Profile.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile(props) {

  const [user, setUser] = useState({});
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);

  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/auth/me', config)
      .then(response => {
        setNotLogged(false)
        setUser(response.data)
      })
    }

  }, [mounted])

  return (
    <div className='profile'>
      <div className='profile-img'>
        <img src='https://1.bp.blogspot.com/-Fz5cMX7WUUI/YV7k8YU4p_I/AAAAAAAASw4/cPeTaYDKJNkkGrxi7EIx8k-9UVdCKjsqACLcBGAsYHQ/s0/BF2042-LAN%25C3%2587AMENTO.jpg' alt='BattleField' />
      </div>
      {
        !notLogged ? (
          <>
            <h2>{user.name}</h2>
            <span>Email: {user.email}</span>
            <span>Membro desde: {user.createdAt}</span>
          </>
        ) : (
          <h2>Sem dados do perfil, faça login</h2>
        )
      }
    </div>
  )
}