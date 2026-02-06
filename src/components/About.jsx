import React from 'react';
import { Users, CheckCircle } from 'lucide-react';
import { content } from '../data/data';
import './About.css'; // <--- Importamos el CSS separado

const About = () => (
  <section id="nosotros" className="about-section">
    <div className="about-container">
      
      {/* 1. IMAGEN (Izquierda) */}
      <div className="about-image-wrapper" data-aos="fade-right">
        {/* Caja decorativa detrás */}
        <div className="about-decoration-box"></div>
        <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
            alt="Nosotros" 
            className="about-img"
        />
      </div>

      {/* 2. TEXTO (Derecha) */}
      <div className="about-content" data-aos="fade-left">
        <h2 className="about-title">
          Sobre Nosotros
          <span className="about-title-underline"></span>
        </h2>
        
        <p className="about-text">{content.about.text}</p>
        
        {/* Grid de características (Iconos) */}
        <div className="features-grid">
            
            <div className="feature-card">
                <div className="feature-icon"><Users size={24}/></div>
                <span className="feature-text">Trato Familiar</span>
            </div>

            <div className="feature-card">
                <div className="feature-icon"><CheckCircle size={24}/></div>
                <span className="feature-text">Transparencia Total</span>
            </div>

            <div className="feature-card">
                <div className="feature-icon"><CheckCircle size={24}/></div>
                <span className="feature-text">Gestión Rápida</span>
            </div>

            <div className="feature-card">
                <div className="feature-icon"><Users size={24}/></div>
                <span className="feature-text">Asesoría Legal</span>
            </div>

        </div>
      </div>

    </div>
  </section>
);

export default About;