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
        'msm': '360px',
        'xsm': '375px',
        'vsm': '393px',
        'small': '430px',
        'tablet': '570px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'large': '1343px',
        '2xl': '1536px',
        'vl': '1728px',
        '3xl': '1800px',
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

