/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        retroGold: "#C6A664",
        retroBlack: "#1C1C1C",
        retroCream: "#F4F4F2",
        retroBrown: "#3E2723",
      },
      screens: {
        xs: "320px",
      },
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
      },
      fontSize: {
        "9xl": "8rem",
      },
    },
  },
  plugins: [],
};
