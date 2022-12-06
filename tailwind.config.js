/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {},
    minWidth: {
      '300': '300px',
    },
    colors: {
      'primary': '#FEFDE8',
      'secondary': '#003049',
      'header': '#309c4d',
      'link': '#2d2f83',
    },
  },
  plugins: [],
}
