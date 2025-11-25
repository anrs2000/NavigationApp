/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'workSans-black': ['WorkSans-Black', 'sans-serif'], //sans-serif sería la fuente de respaldo
        'workSans-light': ['WorkSans-Light'],
        'workSans-medium': ['WorkSans-Medium'],
      }
    },
  },
  plugins: [],
}

