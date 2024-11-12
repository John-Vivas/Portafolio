// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">John E Vivas</a>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Inicio</a>
        <a href="#about" onClick={toggleMenu}>Sobre mí</a>
        <a href="#projects" onClick={toggleMenu}>Proyectos</a>
        <a href="#contact" onClick={toggleMenu}>Contacto</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
