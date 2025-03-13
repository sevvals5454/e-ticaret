module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      container: {
        center: true,  
        padding: '3rem', 
      },
      spacing: {
        0.1: "0.063rem",
      },
      backgroundImage: {
        'mobile-app': 'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)',
      },
      
      colors: {
        "brand-color": "#4c3398",
        "brand-purple": "#5A4FCF", 
        "primary-brand-color": "#5d3ebc",
        "brand-yellow": "#ffd300",
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
