import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        
        {/* 1. LOGO */}
        <div className="logo-container" onClick={() => window.scrollTo(0, 0)}>
          <img src="/logo ADGES N.png" alt="ADGES Logo" />
        </div>

        {/* 2. MENÚ ESCRITORIO (Controlado por CSS .desktop-menu) */}
        <div className="desktop-menu">
          <button onClick={() => scrollTo('nosotros')} className="nav-link">Sobre Nosotros</button>
          <button onClick={() => scrollTo('servicios')} className="nav-link">Servicios</button>
          <button onClick={() => scrollTo('tarifas')} className="nav-link">Tarifas</button>
          <button onClick={() => scrollTo('contacto')} className="btn-contact">Contacto</button>
        </div>

        {/* 3. BOTÓN HAMBURGUESA (Controlado por CSS .mobile-toggle) */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* 4. MENÚ DESPLEGABLE MÓVIL (Renderizado condicional) */}
      {isOpen && (
        <div className="mobile-dropdown">
          <button onClick={() => scrollTo('nosotros')} className="mobile-link">Sobre Nosotros</button>
          <button onClick={() => scrollTo('servicios')} className="mobile-link">Servicios</button>
          <button onClick={() => scrollTo('tarifas')} className="mobile-link">Tarifas</button>
          <button onClick={() => scrollTo('contacto')} className="mobile-link" style={{background: 'var(--adges-dark)', textAlign: 'center', borderRadius: '5px'}}>Contacto</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;