/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      animation: {
        fadeInOut: 'fadeInOut 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

