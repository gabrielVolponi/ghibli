/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A7F3D0', // Verde claro
          DEFAULT: '#34D399', // Verde médio
          dark: '#065F46', // Verde escuro
        },
        secondary: {
          light: '#FDE68A', // Amarelo claro
          DEFAULT: '#F59E0B', // Amarelo médio
          dark: '#B45309', // Amarelo escuro
        },
        accent: {
          light: '#BFDBFE', // Azul claro
          DEFAULT: '#3B82F6', // Azul médio
          dark: '#1E3A8A', // Azul escuro
        },
      },
      fontFamily: {
        nature: ['"Poppins"', 'sans-serif'], // Fonte personalizada
      },
    },
  },
  plugins: [],
};