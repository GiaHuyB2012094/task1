/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#118D4E',
        'primary-blue' : '#0071A9',
      },
      height: {
        'footer': '534px',
      }
    },
  },
  plugins: [],
}

