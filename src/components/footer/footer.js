import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import Logo from '../../assets/logobatman.webp'

function Footer() {

    return (

        <footer>

            <img id="logo" src={Logo} alt="logo"/>

            <span>Todos os direitos reservados ©</span>

            <span>Desenvolvido por Pedro Schinke</span>

            <ul id="footer-list">

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

            </ul>

        </footer>
    )
}

export default Footer;