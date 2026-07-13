import React from "react";
import "./navbar.css";
import logo from '../../assets/logoTech.webp';

export default function NavBar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} 
      alt="Logo Loja Tech" 
            />

      <div className="navbar__inner">
        <div className="navbar__brand"></div>
        <ul className="navbar__links">
          <li><a href="#"><strong>Produtos</strong></a></li>
          <li><a href="#"><strong>Ofertas</strong></a></li>
          <li><a href="#"><strong>Contato</strong></a></li>
        </ul>
      </div>
    </nav>
  );
}
