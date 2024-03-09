/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: '#69D2E7',
        primary: '#A6FAFF',
        secondary: '#FCDFFF',
        success: '#2FFF2F',
        warning: '#FFFF00',
        danger: '#FF4911'
      }
    },
  },
  plugins: [],
}