import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/logobatman.webp'

function Header(){

    const [login, setLogin] = useState(false)

    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)

    return (
        
        <header>

            <Link style={{ textDecoration: 'none' }} to='/'>
                <img id="logo" src={Logo} alt="logo"/>
            </Link>

            <nav>

                <ul>

                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>Fotos</li>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>

                    <li className="login" onClick={() => setLogin(true)}>{login ? 'Meu Perfil' : 'Login'}</li>

                </ul>

            </nav>
            
        </header>
    )
}

export default Header;