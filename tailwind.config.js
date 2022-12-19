/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      minWidth: {
        '280': '280px',
        '290': '290px',
        '300': '300px',
      },
      colors: {
        'primary': '#FEFDE8',
        'secondary': '#003049',
        'header': '#7e0306',
        'link': '#2d2f83',
      },
      screens: {
        'mdl': '1007px',
     },
     flex: {
      '2': '2',
      '3': '3',
     }
    },
  },
  plugins: [],
}
