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
      '4': '4',
     },
     backgroundImage: {
      'discord': "url('/Images/discord1.png')",
      'calculator': "url('/Images/calcHome.png')",
      'tictactoe' : "url('/Images/tictactoeHome.png')",
      'wordle': "url('/Images/game.png')",
      'foobar': "url('/Images/solutions.png')",
      'ds': "url('/Images/structures.png')", 
     },
     borderWidth: {
      '3': '3px',
     },
     width: {
      '37': '149px',
     },
    },
  },
  plugins: [],
}

