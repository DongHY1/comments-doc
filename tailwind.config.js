/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {},
  },
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",'./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  plugins: [require("daisyui"),nextui()]
}
