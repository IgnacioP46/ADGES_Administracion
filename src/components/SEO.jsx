import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ADGES Administración de Fincas",
    "image": "https://adges.es/logo-adges.png", 
    "url": "https://adges.es", 
    "telephone": "+34914463700",
    "email": "adges.admf@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle de Nicasio Gallego, 17, 1ºB",
      "addressLocality": "Chamberí, Madrid",
      "postalCode": "28010",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.4306", 
      "longitude": "-3.6974"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>ADGES | Administración de Fincas en Madrid y Chamberí</title>
        <meta name="description" content="Administradores de fincas colegiados en Madrid (Chamberí). Gestión transparente, ahorro de costes y atención personalizada para tu comunidad. Presupuesto sin compromiso." />
        <meta name="keywords" content="administración de fincas madrid, administradores fincas chamberí, gestor de comunidades, adges" />
        <meta property="og:title" content="ADGES - Administración de Fincas Profesional" />
        <meta property="og:description" content="Transparencia y eficacia para tu comunidad en Madrid. ¡Contáctanos!" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;
