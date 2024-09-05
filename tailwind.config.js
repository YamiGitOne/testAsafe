/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        asafeBlue: '#3b82f6',
        asafeDarkBlue: '#0E479D',
        asafeOrange: '#FFA320',
        light: '#F7F8FA',
        bone: '#f9f9f9'
      }
    },
  },
  plugins: [],
}
