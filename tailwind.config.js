/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      colors: {
      violet: '#853B8F',
      },
      fontFamily: {
        body: "roboto",
      }
    },
  },
  plugins: [],
}

