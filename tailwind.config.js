/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  /*er ekki viss um að þetta sé rétt sett inn, finnst ekki vera að virka */
  theme: {
    fontFamily: {
      'body': ['Mulish', 'sans-serif'],
      'heading': ['Comforta', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
