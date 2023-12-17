/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(97deg, rgba(215, 241, 241, 0.17) 44.53%, rgba(215, 241, 241, 0.00) 117.25%)",
        "gradient-btn":
          "linear-gradient(95deg, rgba(215, 241, 241, 0.28) 22.57%, rgba(217, 217, 217, 0.00) 93.56%)",
      },
    },
    fontFamily: {
      osw: ["Oswald", "sans-serif"],
      rob: ["Roboto", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white-200": "#D7F1F1",
      "white-100": "#B4BCC3",
      "white-trans": "rgba(215, 241, 241, 0.20)",
    },
  },
  plugins: [],
};