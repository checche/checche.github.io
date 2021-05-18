const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['content/**/*.md'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
