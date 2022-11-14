/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}","./public/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'midnight': '#121063',
        'gray-dark': '#273444',
        'principal': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'LA': "url('../img/LA.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'miami': "url('../img/miami.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'bali': "url('../img/bali.jpg')",
        'norway': "url('../img/norway.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",

      },
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      ringColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
  ],
}
