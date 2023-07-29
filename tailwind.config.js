/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      bg: "#F4F6FF",
      bg2: "#E9EFFF",
      lightGray: "#A7AABC",
      gray: "#999CAF",
      green: "#00A979",
      red: "#E4335D",
      green: "#00A979",
      lightYellow: "#FFEECA",
      yellow: "#FDC500",
      lightBlue: "#99CBFF",
      blue: "#1977F1",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
