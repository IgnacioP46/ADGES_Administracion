# 🏢 ADGES - Administración de Fincas

Web corporativa profesional desarrollada para **ADGES**, una empresa de administración de fincas en Madrid (Chamberí).

El proyecto es una **Landing Page** moderna, rápida y totalmente responsive, diseñada para captar clientes y facilitar el contacto.

![Estado del Proyecto](https://img.shields.io/badge/Estado-Terminado-success)
![React](https://img.shields.io/badge/React-v18+-blue)
![Vite](https://img.shields.io/badge/Build-Vite-purple)

## 🚀 Características

- **Diseño Responsive:** Adaptado a móviles, tablets y escritorio.
- **Formulario de Contacto:** Integrado con **EmailJS** para envío de correos en tiempo real.
- **Validaciones:** Control de errores en el formulario (campos obligatorios, formatos correctos).
- **Mapa Interactivo:** Integración con Google Maps.
- **SEO Optimizado:** Uso de `react-helmet-async` y datos estructurados (JSON-LD) para posicionamiento local.
- **UI Moderna:** Animaciones suaves y diseño limpio.

## 🛠️ Tecnologías Utilizadas

- **Core:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Estilos:** CSS3 Modular (BEM) + Tailwind CSS (para estructura base)
- **Funcionalidades:**
  - `emailjs-browser` (Envíos de email)
  - `sweetalert2` (Alertas bonitas)
  - `react-helmet-async` (SEO)
  - `lucide-react` (Iconos)

## 📦 Instalación y Uso Local

Si quieres probar este proyecto en tu ordenador:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/IgnacioP46/ADGES_Administracion.git

   cd adges-admin
   npm install
   Configura las Variables de Entorno: Crea un archivo .env en la raíz y añade tus claves de EmailJS:
   ```

Fragmento de código
VITE_EMAIL_SERVICE_ID=tu_service_id
VITE_EMAIL_TEMPLATE_ID=tu_template_id
VITE_EMAIL_PUBLIC_KEY=tu_public_key
Inicia el servidor de desarrollo:

npm run dev

---

### 2. Cómo subirlo a GitHub (Paso a paso)

Para entender visualmente lo que vamos a hacer, aquí tienes un esquema de cómo funciona Git:

Sigue estos pasos en tu terminal (VS Code):

#### Paso A: Preparación (IMPORTANTE)

Asegúrate de tener un archivo llamado `.gitignore` en la raíz. Si no lo tienes, créalo y escribe dentro esto (para no subir basura ni tus claves privadas):

```text
node_modules
.env
dist
.DS_Store
Paso B: Comandos de subida
Si es la primera vez que subes este proyecto:

Ve a GitHub.com, inicia sesión y crea un "New Repository".

Nombre: ADGES_Administracion

Público o Privado (tu elección).

NO marques "Add a README file" (ya lo hemos creado nosotros).

En tu terminal de VS Code, ejecuta estos comandos uno por uno:

# 1. Iniciar Git (si no lo has hecho ya)
git init

# 2. Añadir todos los archivos a la zona de "preparación"
git add .

# 3. Guardar los cambios (Hacer la "foto" del código)
git commit -m "Versión inicial: Web completa con Formulario y SEO"

# 4. Renombrar la rama a 'main' (estándar moderno)
git branch -M main

# 5. Conectar tu PC con GitHub (Copia la URL de TU repositorio)
git remote add origin https://github.com/TU_USUARIO_GITHUB/ADGES_Administracion.git

# 6. Enviar los archivos a la nube
git push -u origin main
```
