/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#ff7f6b",
          second: "#ff505c"
        },
        secondary: "#393a55",
        dark: "#24252d",
        light: "#fffdfd"
      }
    },
  },
  plugins: [],
}

