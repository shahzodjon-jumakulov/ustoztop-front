// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/fonts/TT-Norms/stylesheet.css"],
  modules: ["@nuxtjs/i18n", '@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: "UstozTop",
      short_name: "UstozTop nuxt3",
      description: "Ustoz Top PWA",
      icons: [
        {
          src: "icons/icon_16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "icons/icon_32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "icons/icon_128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "icons/icon_256x256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "icons/icon_1024x1024.png",
          sizes: "1024x1024",
          type: "image/png",
        },
      ]
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["uz", "ru"],
    defaultLocale: "uz",
    strategy: "prefix_except_default",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
});
