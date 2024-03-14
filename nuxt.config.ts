export default defineNuxtConfig({
  devtools: { enabled: true },
  css:["~/assets/style/main.css"],
postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },})