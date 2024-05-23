/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0033A1',
        'skybg': '#0f52ba'
      },
      screens: {
        'small': '430px',
        'tablet': '570px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backdropBlur: {
        '16': '16px',
      },
      backdropSaturate: {
        '180': '180%',
      },
      backgroundColor: {
        'custom-bg': 'rgba(251, 252, 254, 0.75)',
      },
      borderColor: {
        'custom-border': 'rgba(255, 255, 255, 0.125)',
      },
    },
  },
  plugins: [require('tailwindcss-filters'),],
}

