/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Inclua o arquivo HTML principal
    "./**/*.html",  // Inclua outros arquivos HTML no projeto
    "./**/*.js",    // Inclua arquivos JavaScript, se necessário
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define "Poppins" como fonte primária
      },
      colors: {
        primary: '#14DB8F', // Cor primária personalizada
        secondary: '#BABF15', // Cor secundária personalizada
        accent: '#72B6F2', // Cor de destaque personalizada
      },
    },
  },
  plugins: [],
};