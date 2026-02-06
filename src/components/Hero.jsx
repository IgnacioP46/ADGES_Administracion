import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';

const Hero = () => {
  // Imagen de respaldo
  const [bgImage, setBgImage] = useState("https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=1920");

  useEffect(() => {
    const fetchUnsplashImage = async () => {
      try {
        const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
        if (!accessKey) return;

        // Buscamos fotos de "Madrid architecture"
        const response = await fetch(`https://api.unsplash.com/photos/random?query=madrid-architecture&orientation=landscape&client_id=${accessKey}`);
        
        if (response.ok) {
          const data = await response.json();
          if (data.urls && data.urls.regular) {
            setBgImage(data.urls.regular);
          }
        }
      } catch (error) {
        console.error("Error cargando imagen:", error);
      }
    };

    fetchUnsplashImage();
    const interval = setInterval(fetchUnsplashImage, 300000); // 5 minutos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      
      {/* 1. IMAGEN DE FONDO */}
      <img 
        src={bgImage}
        alt="Fondo Comunidad de Madrid"
        className="hero-bg-image"
      />

      {/* 2. CAPA OSCURA */}
      <div className="hero-overlay"></div> 
      
      {/* 3. CONTENIDO PRINCIPAL */}
      <div className="hero-content-wrapper">
        
        {/* CAJA SEMITRANSPARENTE */}
        <div className="hero-glass-card">
            
            {/* TÍTULO */}
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              ADGES Administración
            </h1>

            {/* SUBTÍTULO */}
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
              "Hacemos de tu comunidad un hogar"
            </p>

            {/* BOTÓN */}
            <div data-aos="zoom-in" data-aos-delay="500">
              <button 
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })} 
                className="hero-btn"
              >
                  Solicitar Presupuesto
              </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;