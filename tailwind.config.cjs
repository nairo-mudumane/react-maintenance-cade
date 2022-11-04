/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: { green1: "#01e4d0" },
    },
  },
  plugins: [],
};
