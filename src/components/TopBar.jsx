import React, { useState, useEffect } from 'react';
import './TopBar.css'; // Importamos su propio CSS

const TopBar = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: '--', desc: 'Cargando...', icon: '🌤️' });

  // 1. RELOJ Y SALUDO
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Calcular el saludo según la hora
  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "¡Buenos días! ☀️";
    if (hour < 20) return "¡Buenas tardes! ☕";
    return "¡Buenas noches! 🌙";
  };

  // 2. CLIMA (API)
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Usamos una API Key pública de prueba o la tuya si tienes
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY; 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&units=metric&lang=es`);
        const data = await response.json();
        
        if (data.main) {
          const desc = data.weather[0].description;
          const formattedDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
          
          // Emojis básicos según el clima
          let icon = '☁️';
          if (desc.includes('claro') || desc.includes('sol')) icon = '☀️';
          if (desc.includes('lluvia')) icon = '🌧️';
          if (desc.includes('nube')) icon = '⛅';
          
          setWeather({ 
            temp: Math.round(data.main.temp) + '°C', 
            desc: formattedDesc,
            icon: icon
          });
        }
      } catch (error) {
        console.error("Error clima:", error);
        setWeather({ temp: '', desc: 'Madrid', icon: '📍' });
      }
    };

    fetchWeather();
  }, []);

  // Formato de fecha y hora
  const formattedDate = time.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
  const formattedTime = time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="topbar-container">
      <div className="topbar-content">
        
        {/* IZQUIERDA: Saludo y Fecha */}
        <div className="topbar-item">
            <span>{getGreeting()}</span>
            <span className="hidden md:inline">| 📅 {formattedDate}</span>
        </div>

        {/* DERECHA: Hora y Clima */}
        <div className="topbar-item">
            <span>Madrid: {weather.icon} {weather.temp}</span>
            <span style={{opacity: 0.7}}>|</span>
            <span>⏰ {formattedTime}</span>
        </div>

      </div>
    </div>
  );
};

export default TopBar;