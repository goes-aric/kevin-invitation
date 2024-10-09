/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#915E72',
      },      
    },
  },
  plugins: [],
}
