import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar estilos de la animación

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación (1 segundo)
      once: true,     // Que solo se anime una vez al bajar (más elegante)
      offset: 100,    // Que empiece un poco antes de llegar al elemento
      easing: 'ease-out-cubic', // Efecto de frenado suave
    });
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-x-hidden">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;