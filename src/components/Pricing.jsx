import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { content } from '../data/data';
import './Pricing.css'; // <--- Importamos el CSS separado

const Pricing = () => (
  <section id="tarifas" className="pricing-section">
    <div className="pricing-container">
        
      {/* 1. TÍTULO CENTRADO */}
      <div className="pricing-header" data-aos="fade-up">
          <h2 className="pricing-title">Tarifas Transparentes</h2>
          <p className="text-gray-500 mt-4 text-lg">
            Planes adaptados a las necesidades reales de tu comunidad, sin sorpresas ni letra pequeña.
          </p>
      </div>
      
      {/* 2. CARDS HORIZONTALES (Grid) */}
      <div className="pricing-grid">
          {content.pricing.map((plan, i) => (
            <div 
                key={i} 
                // Si es el índice 1 (el segundo), le añadimos la clase 'featured'
                className={`pricing-card ${i === 1 ? 'featured' : ''}`}
                data-aos="fade-up"
                data-aos-delay={i * 150} // Efecto de aparición escalonada
            >
              
              {/* Etiqueta "Recomendado" solo para el segundo item */}
              {i === 1 && <span className="featured-badge">Recomendado</span>}
              
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">{plan.title}</h3>
                <div className="pricing-price-wrapper">
                  <span className="pricing-price">{plan.price}</span>
                  <span className="pricing-unit">{plan.unit}</span>
                </div>
              </div>

              <ul className="pricing-features">
                {plan.features.map((f, idx) => (
                    <li key={idx} className="pricing-feature-item">
                        {/* Usamos un icono de Check o Flecha */}
                        <ArrowRight size={18} className="pricing-check-icon"/> 
                        {f}
                    </li>
                ))}
              </ul>

            </div>
          ))}
      </div>

    </div>
  </section>
);

export default Pricing;