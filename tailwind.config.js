/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        wobble: 'wobble 1s ease-in-out',
        pulse: 'pulse 2s infinite', // Add pulse animation
      },
      keyframes: {
        wobble: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(-5deg)' },
          '30%': { transform: 'rotate(5deg)' },
          '45%': { transform: 'rotate(-5deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulse: { // Define the pulse keyframes
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [nextui()],
  darkMode: "class", // Enable dark mode support
}
