/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto" : ["Roboto"],
      },
      colors: {
        "blue": '#306DF5',
        "biru": '#0D6EFD',
      }
    },
  },
  plugins: [],
}

