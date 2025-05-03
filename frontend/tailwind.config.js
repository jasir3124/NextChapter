/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8B703",     // bright yellow-orange
        darkBrown: "#412E33",   // deep brown
        darkGray: "#222222",    // nearly black
      },
    },
  },
  plugins: [],
}