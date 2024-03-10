/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto" : ["Roboto"],
        "jost": ["Jost"],
        "sans": ["Open Sans"],
      },
      colors: {
        "biru" : '#0D6EFD',
        "biru-button" : '#47B2E4',
        "biru-background" : '#37517E',
        "tulisan" : '#212529',
        "newsletter" : '##F3F5FA',
      }
    },
  },
  plugins: [],
}

