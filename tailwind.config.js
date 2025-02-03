/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif']
      }
    }
  },
  plugins: []
}
