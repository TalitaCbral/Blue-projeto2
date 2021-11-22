import './Navbar.css'
import logo from './logo-steam.png'

export default function Navbar(){

    return(
        <div className="navbar">
            <img className="logo" src={logo} alt="" />
            <ul className="menus">
                <li>LOJA</li>
                <li>COMUNIDADE</li>
                <li>SOBRE</li>
                <li>SUPORTE</li>
            </ul>
        </div>
    )
}