/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0033A1',
        'skybg': '#0637a2'
      },
    },
  },
  plugins: [],
}

