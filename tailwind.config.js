/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },

    colors: {
      transparent: "transparent",
      offblack: "#0F0F0F",
      offwhite: "#F7F4EF",
      pearl: "#F4F4F2",
      zest: "#DCEB59",
      ember: "#F05A31",
      aura: "#D19BF3",
      grey: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
      },
    },

    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        primary: ["Questrial", "sans-serif"],
        "material-symbols": ['"Material Symbols Outlined"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
