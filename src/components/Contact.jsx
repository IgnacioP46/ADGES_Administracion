import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  // Opciones del desplegable
  const subjectOptions = [
    "Consultas",
    "Presupuestos",
    "Obras",
    "Altas y contrataciones",
    "Otros"
  ];

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    calle: '',
    numero: '',
    piso: '',
    letra: '',
    escalera: '',
    asunto: '', 
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // --- VALIDACIÓN INDIVIDUAL ---
  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case 'nombre':
      case 'apellidos':
        if (!value.trim()) errorMsg = "Este campo es obligatorio.";
        else if (value.length < 2) errorMsg = "Mínimo 2 letras.";
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) errorMsg = "El email es obligatorio.";
        else if (!emailRegex.test(value)) errorMsg = "Formato inválido (ej: hola@web.com).";
        break;

      case 'calle':
        if (!value.trim()) errorMsg = "Indica la calle.";
        break;

      case 'numero':
        if (!value.trim()) errorMsg = "Falta el Nº.";
        break;
      
      case 'piso':
        if (!value.trim()) errorMsg = "Falta el piso.";
        break;

      case 'asunto':
        if (!value) errorMsg = "Selecciona un motivo.";
        break;

      case 'mensaje':
        if (!value.trim()) errorMsg = "Por favor, detalla tu consulta.";
        else if (value.length < 10) errorMsg = "El mensaje es muy corto.";
        break;

      default:
        break;
    }
    return errorMsg;
  };

  // --- MANEJO DE CAMBIOS (CON RESTRICCIONES) ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    // 1. RESTRICCIÓN: En Nombre y Apellidos SOLO LETRAS y espacios
    if (name === 'nombre' || name === 'apellidos') {
      const onlyLetters = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
      if (!onlyLetters.test(value)) return; // Si intenta escribir un número, lo ignoramos
    }

    // 2. RESTRICCIÓN: En "Nº" SOLO NÚMEROS
    if (name === 'numero') {
      // Reemplazamos cualquier cosa que no sea un dígito por vacío
      finalValue = value.replace(/\D/g, ''); 
    }

    setFormData({ ...formData, [name]: finalValue });

    // Limpiamos el error mientras escribe para mejor UX
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // --- VALIDACIÓN AL SALIR DEL CAMPO (ON BLUR) ---
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // --- ENVÍO DEL FORMULARIO ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar todo antes de enviar
    let tempErrors = {};
    let isValid = true;
    Object.keys(formData).forEach(key => {
        // No validamos letra o escalera obligatoriamente
        if(key !== 'letra' && key !== 'escalera') {
            const error = validateField(key, formData[key]);
            if (error) {
                tempErrors[key] = error;
                isValid = false;
            }
        }
    });

    setErrors(tempErrors);

    if (!isValid) {
      Swal.fire({
        icon: 'warning',
        title: 'Faltan datos',
        text: 'Por favor, corrige los campos marcados en rojo.',
        confirmButtonColor: '#1e293b'
      });
      return;
    }

    setIsSending(true);

    const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    // Spinner de carga
    Swal.fire({
        title: 'Enviando consulta...',
        text: 'Estamos procesando tu solicitud.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
    });

    const templateParams = {
        nombre: formData.nombre,
        apellidos: formData.apellidos,
        email: formData.email,
        
        calle: formData.calle,
        numero: formData.numero,
        piso: formData.piso,
        letra: formData.letra || 'N/A',
        escalera: formData.escalera || 'N/A',
        
        asunto: formData.asunto,
        mensaje: formData.mensaje
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        Swal.fire({
          title: '¡Recibido!',
          text: 'Gracias por contactar con ADGES. Te responderemos en breve.',
          icon: 'success',
          confirmButtonColor: '#e3b555'
        });

        setFormData({
          nombre: '', apellidos: '', email: '',
          calle: '', numero: '', piso: '',
          letra: '', escalera: '', asunto: '', mensaje: ''
        });
        setIsSending(false);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        Swal.fire({
          icon: 'error',
          title: 'Error técnico',
          text: 'No se pudo enviar el correo. Por favor, llámanos o inténtalo más tarde.',
          confirmButtonColor: '#d33'
        });
        setIsSending(false);
      });
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        
        <div className="contact-header" data-aos="fade-up">
          <h2 className="contact-title">Contacta con Nosotros</h2>
          <p className="text-gray-500 mt-4 text-lg">
            Visítanos en Calle Nicolás Gallego 17, Madrid, o escríbenos aquí.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* 1. FORMULARIO */}
          <div className="contact-form-card" data-aos="fade-right">
            <form onSubmit={handleSubmit} noValidate>
              
              <div className="form-row two-cols">
                <div className="form-group">
                  <label className="form-label">Nombre <span className="required">*</span></label>
                  <input 
                    type="text" 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`form-input ${errors.nombre ? 'input-error' : formData.nombre ? 'input-success' : ''}`} 
                    placeholder="Tu nombre" 
                  />
                  {errors.nombre && <span className="error-msg">{errors.nombre}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Apellidos <span className="required">*</span></label>
                  <input 
                    type="text" 
                    name="apellidos" 
                    value={formData.apellidos} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`form-input ${errors.apellidos ? 'input-error' : formData.apellidos ? 'input-success' : ''}`} 
                    placeholder="Tus apellidos" 
                  />
                  {errors.apellidos && <span className="error-msg">{errors.apellidos}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email <span className="required">*</span></label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`form-input ${errors.email ? 'input-error' : formData.email ? 'input-success' : ''}`} 
                    placeholder="ejemplo@correo.com" 
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              {/* DIRECCIÓN */}
              <div className="form-row address-grid">
                <div className="form-group">
                  <label className="form-label">Calle <span className="required">*</span></label>
                  <input 
                    type="text" 
                    name="calle" 
                    value={formData.calle} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`form-input ${errors.calle ? 'input-error' : formData.calle ? 'input-success' : ''}`} 
                    placeholder="C/ Ejemplo" 
                  />
                  {errors.calle && <span className="error-msg">{errors.calle}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Nº <span className="required">*</span></label>
                  <input 
                    type="text" 
                    name="numero" 
                    value={formData.numero} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`form-input ${errors.numero ? 'input-error' : formData.numero ? 'input-success' : ''}`} 
                    placeholder="17" 
                    maxLength="5"
                  />
                  {errors.numero && <span className="error-msg">{errors.numero}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Piso <span className="required">*</span></label>
                  <input 
                    type="text" 
                    name="piso" 
                    value={formData.piso} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`form-input ${errors.piso ? 'input-error' : formData.piso ? 'input-success' : ''}`} 
                    placeholder="1º" 
                  />
                  {errors.piso && <span className="error-msg">{errors.piso}</span>}
                </div>
              </div>

              <div className="form-row address-extra">
                 <div className="form-group">
                  <label className="form-label">Letra</label>
                  <input type="text" name="letra" value={formData.letra} onChange={handleChange} className="form-input" placeholder="A" />
                </div>
                <div className="form-group">
                  <label className="form-label">Escalera</label>
                  <input type="text" name="escalera" value={formData.escalera} onChange={handleChange} className="form-input" placeholder="Izq." />
                </div>
              </div>

              {/* --- DESPLEGABLE ASUNTO --- */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Asunto <span className="required">*</span></label>
                  <select 
                    name="asunto" 
                    value={formData.asunto} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`form-input form-select ${errors.asunto ? 'input-error' : formData.asunto ? 'input-success' : ''}`}
                  >
                    <option value="">Selecciona una opción</option>
                    {subjectOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.asunto && <span className="error-msg">{errors.asunto}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Mensaje <span className="required">*</span></label>
                  <textarea 
                    name="mensaje" 
                    rows="5" 
                    value={formData.mensaje} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`form-textarea ${errors.mensaje ? 'input-error' : formData.mensaje ? 'input-success' : ''}`} 
                    placeholder="Describe detalladamente qué necesitas..."
                  ></textarea>
                  {errors.mensaje && <span className="error-msg">{errors.mensaje}</span>}
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? 'Enviando...' : 'Enviar Solicitud'}
              </button>

            </form>
          </div>

          {/* 2. MAPA */}
          <div className="map-container" data-aos="fade-left">
            <iframe 
              className="map-frame"
              src="https://maps.google.com/maps?q=Calle+de+Nicasio+Gallego+17+Chamberi+28010+Madrid&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen="" 
              loading="lazy"
              title="Mapa Ubicación ADGES"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;