import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Building2 } from 'lucide-react';
import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* COLUMNA 1: Sobre ADGES */}
        <div className="footer-col">
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={32} className="text-brand-gold" />
            <span className="text-2xl font-bold text-white tracking-wider">ADGES</span>
          </div>
          <p className="footer-text">
            Expertos en administración de fincas en Madrid. Garantizamos transparencia, 
            ahorro y tranquilidad para tu comunidad de propietarios con un trato cercano y profesional.
          </p>
        </div>

        {/* COLUMNA 2: Enlaces Rápidos */}
        <div className="footer-col">
          <h3>Navegación</h3>
          <ul className="footer-links">
            <li><a href="#inicio"><ChevronRight size={16}/> Inicio</a></li>
            <li><a href="#nosotros"><ChevronRight size={16}/> Nosotros</a></li>
            <li><a href="#servicios"><ChevronRight size={16}/> Servicios</a></li>
            <li><a href="#tarifas"><ChevronRight size={16}/> Tarifas</a></li>
            <li><a href="#contacto"><ChevronRight size={16}/> Contacto</a></li>
          </ul>
        </div>

        {/* COLUMNA 3: Contacto (Datos solicitados) */}
        <div className="footer-col">
          <h3>Contacto</h3>
          
          {/* Dirección (Link a Maps) */}
          <div className="contact-item">
            <MapPin size={20} className="contact-icon" />
            <a 
                href="https://www.google.com/maps/search/?api=1&query=Calle+de+Nicasio+Gallego+17+1B+Madrid" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
            >
              Calle de Nicasio Gallego, 17, 1ºB<br/>
              Chamberí, 28010 Madrid
            </a>
          </div>

          {/* Teléfono (Click to Call) */}
          <div className="contact-item">
            <Phone size={20} className="contact-icon" />
            <a href="tel:+34914463700" className="contact-link">
              914 463 700
            </a>
          </div>

          {/* Email (Mailto) */}
          <div className="contact-item">
            <Mail size={20} className="contact-icon" />
            <a href="mailto:adges.admf@gmail.com" className="contact-link">
              adges.admf@gmail.com
            </a>
          </div>
        </div>

        {/* COLUMNA 4: Imágenes / Asociaciones */}
        <div className="footer-col">
            <h3>Colaboradores</h3>
            <p className="text-sm text-gray-400 mb-4">Miembros colegiados y certificados.</p>
            
            <div className="footer-logos">
                {/* AQUÍ VAN TUS IMÁGENES. 
                   Sube tus logos a la carpeta 'public' o 'src/assets' y cambia la ruta (src).
                   He puesto unos placeholders de ejemplo.
                */}
                
                {/* Ejemplo: Logo Colegio Administradores */}
                <img 
                    src="./public/logoAdmin.png" 
                    alt="Colegio Administradores de Fincas" 
                    className="footer-association-img" 
                />

                {/* Ejemplo: Otra certificación */}
                <img 
                    src="./public/logo_antigo.png" 
                    alt="Certificado de Calidad" 
                    className="footer-association-img" 
                />
                <img 
                    src="./public/logoColegioA.jpg" 
                    alt="Certificado de Calidad" 
                    className="footer-association-img" 
                />
                <img 
                    src="./public/logoColegioA.svg" 
                    alt="Certificado de Calidad" 
                    className="footer-association-img" 
                />
            </div>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} ADGES Administración de Fincas. Todos los derechos reservados. 
          <br className="md:hidden"/> Hecho con <span className="heart">❤</span> en Madrid.
        </p>
      </div>
    </footer>
  );
};

export default Footer;