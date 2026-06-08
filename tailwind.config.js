/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "!./node_modules/**"],
  theme: {
    extend: {
      colors: {
        forest:   "#2D5016",
        amber:    "#E8820C",
        dusty:    "#C0392B",
        offwhite: "#F8F6F1",
        charcoal: "#2C2C2C",
        warmgrey: "#EDEDEA",
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', "sans-serif"],
        body:    ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
