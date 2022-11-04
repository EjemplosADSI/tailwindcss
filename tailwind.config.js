/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'midnight': '#121063',
        'gray-dark': '#273444',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },

  },
  plugins: [],
}
