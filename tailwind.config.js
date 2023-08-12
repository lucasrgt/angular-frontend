/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'b2blue-700': '#20124E',
        'b2blue-800': '#100631',
        'b2green-400': '#00DDA5',
        'b2green-500': '#009570',
      },
    },
  },
  plugins: [],
};
