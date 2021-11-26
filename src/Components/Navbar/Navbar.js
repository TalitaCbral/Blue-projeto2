import './Navbar.css'
import logo from './logo-steam.png'


export default function Navbar(){

    return(
        <div className="navbar">
            <img className="logo" src={logo} alt="" />
            <ul className="menus">
                <li><a href='/Login'>LOGIN</a></li>
                <li><a href='/auth/me'>PERFIL</a></li>
                <li><a href='/user/register'>REGISTRE-SE</a></li>
                <li><a href='/game/myWishList'>LISTA DE DESEJOS</a></li>
            </ul>
        </div>
    )
}