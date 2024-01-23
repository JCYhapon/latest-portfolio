/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#EAE7DC",
        brown: "#D8C3A5",
        gray: "8E8D8A",
        lightgreen: "#85DCB",
        darkgreen: "#41B3A3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        semibold: 500,
        bold: 700,
        extrabold: 900,
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
