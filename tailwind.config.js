/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f3f4f6',
          gold: '#e3b555', 
          DEFAULT: '#263746',
          dark: '#1a2632',
        }
      }
    },
  },
  plugins: [],
}