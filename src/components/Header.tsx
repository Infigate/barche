import React from 'react';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header d-flex align-items-center justify-content-between fixed-top bg-white shadow">
      <div className="header-left">
        <a href="#top"><img src={logo} alt="Logo" className="logo-image" /></a>
      </div>

      <div className="header-right align-items-center">
        <nav>
          <ul className="nav-list d-flex px-3 mb-0">
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;