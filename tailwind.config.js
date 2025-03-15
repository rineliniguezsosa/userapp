/** @type {import('tailwindcss').Config} */
export default {
    darkMode:'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
         rojo:'#eb4536',
         black: '#212121',
         white: '#ffffff'
        },
      },
    },
    plugins: [],
  }
  