import './Navbar.css';
import logo from './logo-steam.png';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img className='navbar__image' src={logo} alt='Steam'></img>
      </div>
      <div className='navbar__links'>
        <ul className='navbar__links__list'>
          <li>
            <a className='items' href='https://help.steampowered.com/pt-br/'>
              <span className='text'>Suporte</span>
            </a>
          </li>
          <li>
            <a className='items' href='Wishlist'>
              <span className='text'>Lista de Desejos</span>
            </a></li>
          <li>
            <a className='items' href='Iniciar sessão'>
              <span className='text'>Fazer Login/Criar conta</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}