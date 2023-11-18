/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-150': '#EEF1F7',
        'gray-450': '#9CA0AC',
        primary: '#0066FF'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'roboto-900': ['Roboto-900', 'sans-serif']
      }
    }
  },
  plugins: []
}
