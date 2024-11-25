import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header-title">
        <h1>Juan Carlos Estefanía Ovejero</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contacta-conmigo">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
