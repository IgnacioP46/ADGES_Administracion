import React from 'react';
import { Users, Calculator, Scale } from 'lucide-react';
import { content } from '../data/data';
import './Services.css'; // <--- Importamos el nuevo CSS

const Services = () => (
  <section id="servicios" className="services-section">
    <div className="services-container">
      
      {/* 1. TEXTO (Izquierda en PC, orden controlado por CSS) */}
      <div className="services-content">
        <h2 className="services-title" data-aos="fade-up">
            Nuestros Servicios
        </h2>
        
        <div className="services-list">
          {content.services.map((svc, index) => (
            <div 
                key={index} 
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Efecto escalera
            >
              <div className="service-icon">
                 {/* Iconos según el índice */}
                 {index === 0 && <Users size={36} strokeWidth={1.5} />}
                 {index === 1 && <Calculator size={36} strokeWidth={1.5} />}
                 {index === 2 && <Scale size={36} strokeWidth={1.5} />}
              </div>
              
              <div>
                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-desc">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 2. IMAGEN (Derecha en PC, orden controlado por CSS) */}
      <div className="services-image-wrapper" data-aos="zoom-in-left">
          {/* Caja decorativa trasera */}
          <div className="services-decoration"></div>
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" 
            alt="Servicios de Administración" 
            className="services-img"
          />
      </div>

    </div>
  </section>
);

export default Services;