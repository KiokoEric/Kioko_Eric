/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Grey: 'rgba(128, 128, 128, 0.35)',
      },
      width: {
        custom: '260px',
        tablet: '700px',
        contact: '850px'
      },
      height: {
        custom: '260px'
      }
    },
  },
  plugins: [],
}