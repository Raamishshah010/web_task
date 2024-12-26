/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        theme: "#4854BB",
        paragpraph: "#3a3a3a",
        heading: "#4a4a4a",
      }
    },
  },
  plugins: [],
}

