/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.{edge,js}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0e7490',
        'primary-light': '#64838b',
      },
    },
  },
  plugins: [],
}
