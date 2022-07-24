const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'primary-300': '#6869f7',
        'primary-500': '#211d58',
        'pink': '#e432a2',
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'rotate(0.0deg) translateY(0px)'
          },
          '10%': { transform: 'rotate(14deg) translateY(10px) translateX(8px)' },
          '20%': { transform: 'rotate(-8deg) translateY(-5px) translateX(12px)' },
          '30%': { transform: 'rotate(14deg) translateY(3px) translateX(4px)' },
          '40%': { transform: 'rotate(-4deg) translateY(-10px) translateX(-3px)' },
          '50%': { transform: 'rotate(10.0deg) translateY(-10px) translateX(-3px)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 10s linear infinite',
      },
    },
    screens: {
      ...defaultTheme.screens,
      'sm': { 'max': '790px' },
    }
  },
  plugins: [require("@tailwindcss/typography")],


}
