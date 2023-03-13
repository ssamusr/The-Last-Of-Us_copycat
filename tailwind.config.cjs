/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      ffInter: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'cian-blue': '#0070cc',
        'dark-blue': '#1f2024'
      }
    }
  },
  plugins: []
}
