/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-150': '#EEF1F7',
        'gray-350': '#D6DAE4',
        'gray-450': '#9CA0AC',
        'gray-850': '#111827',
        primary: '#0066FF'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'roboto-900': ['Roboto-900', 'sans-serif'],
        'roboto-700': ['Roboto-700', 'sans-serif']
      }
    }
  },
  plugins: []
}
