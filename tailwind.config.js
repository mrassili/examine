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
      white: "#fff",
      black: "#000",
      yellow: {
        100: "#FFFAEA",
        200: "#FFF2C1",
        300: "#FFE999",
        400: "#FFE070",
        500: "#FFD747",
        600: "#FFCB0F",
        700: "#D6A700",
        800: "#9E7B00",
        900: "#665000",
      },
      purple: {
        200: "#C9BDD2",
        400: "#8C68CD",
        500: "#5F3B76",
        600: "#562E69",
        700: "#2F1E4E",
        800: "#24173D",
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
        nav: "0px 2px 6px rgba(0, 0, 0, 0.08)",
        box: "0px 2px 12px rgba(0, 0, 0, 0.08)",
        inner: "inset 0px 0px 18px -4px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
