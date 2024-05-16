/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Glorioso preto
        secondary: "#afafaf", // Um tom mais claro de preto
        tertiary: "#090909", // Um tom mais escuro de preto
        "black-100": "#151515", // Um tom mais claro de preto
        "black-200": "#222222", // Glorioso preto
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #151515", // Alteração na sombra do card
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/herobg2.png')",
      },
    },
  },
  plugins: [],
};
