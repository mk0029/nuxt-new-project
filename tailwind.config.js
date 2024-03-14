/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xl": "22px",
        "3xl": "24px",
        "4xl": "33px",
        "5xl": "40px",
        "6xl": "50px",
        "7xl": "54px",
        "8xl": "88px",
        "9xl": "90px",
        "10xl": "250px",
      },
      colors: {
        black: "#000",
        withDirectives: "#fff",
        "black-netural": "#171717",
        "deep-slate": "#2a2a2a",
      },
      lineHeight: {
        120: "120%",
        130: "130%",
        140: "140%",

      }
    },
  },
  plugins: [],
}