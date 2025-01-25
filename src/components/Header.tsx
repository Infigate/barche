import React from 'react';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header d-flex align-items-center justify-content-between fixed-top bg-white shadow">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      <div className="header-right">
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