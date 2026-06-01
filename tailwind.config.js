/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layouts/**/*.{js,jsx,ts,tsx}',
    './src/sections/**/*.{js,jsx,ts,tsx}',
    './src/mock/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d9f0ff',
          200: '#bce3ff',
          300: '#8dd2ff',
          400: '#55baff',
          500: '#2a96ff',
          600: '#1a5fff',
          700: '#0e4fd0',
          800: '#0f4096',
          900: '#0b2d6d',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      zIndex: {
        1000: '1000',
      },
      spacing: {
        37.5: '9.375rem',
        124: '31rem',
      },
    },
  },
  plugins: [],
};