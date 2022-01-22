const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./dist/**/*.html"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "bookmark-purple": "#5267DF",
      "bookmark-red": "#FA5959",
      "bookmark-blue": "#242A45",
      "bookmark-grey": "#9194A2",
      "bookmark-white": "#f7f7f7",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
    fontFamily: {
      poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
}