/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: "Roboto",
        bodyFont: "poppins",
      },
      colors: {
        amazon_blue:"#131921",
        amazon_yellow: "#FEBD69",
        amazon_light: "#232F3E",
        footerBottom: " #131A22",
        whiteText: "#ffffff",
        lightText: "#ccc",

      },
      boxShadow:{
        
      }
    },
  },
  plugins: [],
};
