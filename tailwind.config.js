/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: {
        400: "#826595",
        500: "#5F3B76",
        600: "#562E69",
        700: "#2F1E4E",
      },
      gray: {
        100: "#F8F9FA",
        200: "#E9ECEF",
        300: "#DEE2E6",
        400: "#CED4DA",
        500: "#ADB5BD",
        600: "#6C757D",
        700: "#495057",
        800: "#343A40",
        900: "#212529",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        btn: "0px 0px 1px rgba(12, 26, 75, 0.2), 0px 1px 3px rgba(50, 50, 71, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
