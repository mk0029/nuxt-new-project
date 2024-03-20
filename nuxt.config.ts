export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/style/main.css"],
   modules: [
    'nuxt-aos'
  ],
postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },})