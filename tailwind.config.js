/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        legacy: {
          50: '#f7f7f6',
          100: '#e5e7e6',
          200: '#d1d5d3',
          300: '#a3aba7',
          400: '#75827c',
          500: '#536159',
          600: '#374c42',
          700: '#2b3b32',
          800: '#1f2a24',
          900: '#121916'
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};