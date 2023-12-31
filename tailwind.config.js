/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './components/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#0067FF",
        yellowColor:"#FEB60D",
        purpleColor:"#9771FF",
        irisBlueColor:"#01B5C5",
        headingColor:"#181A1E",
        textColor:"#4E545F",  
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/SLUG23_elle/1.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      boxShadow:{
        panelShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      }
    },
  },
  plugins: [],
}

