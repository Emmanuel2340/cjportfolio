
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        flex:{
          flex:'flex-col'
        }
    },
  },
  plugins: [],
}