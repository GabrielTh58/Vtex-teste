/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color': 'var(--primary-color)',
        'text-color-primary': 'var(--text-color-primary)',
        'text-color-secondary': 'var(--text-color-secondary)',
        'text-color-tertiary': 'var(--text-color-tertiary)',
      },      
      fontSize: {
        'font-sm': '10px',
        'font-md': '18px',
        'font-lg': '30px',
        'font-xl': '40px',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/hero.png')", 
      },
      boxShadow: {
        'category-shadow': '0px 4px 11px 0px rgba(0, 0, 0, 0.21)',
      },
    },
  },
  plugins: [],
}