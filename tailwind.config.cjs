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
      },
      animation: {
        fade: 'fadeInUp 1s ease-in'
      },
      keyframes: {
        fadeInUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '100' }
        }
      }
    }
  },
  plugins: []
}
