/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8f7f4",
        secondary: "#f07168",
        tertiary: "#222222",
        secondaryRed: "#f42c37",
        secondaryYellow: "#fdc62e",
        secondaryGreen: "#2dcc6f",
        secondaryBlue: "#1376f4",
        secondaryBlueDark: "#032d64",
        secondaryWhite: "#eeeeee",
        gray: {
          10: "#eeeeee",
          20: "#a2a2a2",
          30: "#7b7b7b",
          40: "#585858",
          90: "#141414",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      backgroundImage: {
        pattern: "url(/src/assets/pattern.png)",
      }
    },
  },
  plugins: [],
}