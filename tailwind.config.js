/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          light: "#333333",  // Light black (Dark Gray)
          DEFAULT: "#000000", // Default black
          dark: "#0D0D0D",   // Darker black
        },
      },
    },
  },
  plugins: [],
}