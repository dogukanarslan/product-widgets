/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Cabin'],
    },
    extend: {
      colors: {
        gray: '#212121',
        lightgray: '#afc6bd',
        darkgray: '#b0b0b0',
        blue: '#2e3a8c',
        green: '#3b755f',
        beige: '#f2ebdb',
      },
    },
  },
  plugins: [],
};
