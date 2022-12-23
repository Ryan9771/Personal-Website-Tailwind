/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./src/Modals/*.html"],
  theme: {
    extend: {
      minWidth: {
        '280': '280px',
        '290': '290px',
        '300': '300px',
      },
      minHeight: {
        '35': '35rem',
        '36': '36rem',
        '40': '40rem',
      },
      colors: {
        'primary': '#FEFDE8',
        'secondary': '#003049',
        'header': '#7e0306',
        'link': '#2d2f83',
        'orangy': 'rgb(162, 66, 11)',
        'lblue': '#3f43b2',
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
      'discord': "url('/Images/DiscordBot/discord1.png')",
      'calculator': "url('/Images/Calculator/calcHome.png')",
      'tictactoe' : "url('/Images/TicTacToe/tictactoeHome.png')",
      'wordle': "url('/Images/Wordle/game.png')",
      'foobar': "url('/Images/GoogleFoobar/solutions.png')",
      'ds': "url('/Images/DataStructures/structures.png')", 
     },
     borderWidth: {
      '3': '3px',
     },
     width: {
      '37': '149px',
     },
     borderRadius: {
      '4xl': '2.5rem',
     },
    },
  },
  plugins: [],
}

