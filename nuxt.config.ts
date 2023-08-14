// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/fonts/TT-Norms/stylesheet.css"],
  modules: ["@nuxtjs/i18n", "@vite-pwa/nuxt"],
  pwa: {
    // manifest: {
    //   name: "UstozTop",
    //   short_name: "UstozTop",
    //   description: "Ustoz Top",
    //   icons: [
    //     {
    //       src: "icons/icon-192x192.png",
    //       sizes: "192x192",
    //       type: "image/png",
    //     },
    //     {
    //       src: "icons/icon-256x256.png",
    //       sizes: "256x256",
    //       type: "image/png",
    //     },
    //     {
    //       src: "icons/icon-384x384.png",
    //       sizes: "384x384",
    //       type: "image/png",
    //     },
    //     {
    //       src: "icons/icon-512x512.png",
    //       sizes: "512x512",
    //       type: "image/png",
    //     },
    //   ],
    //   background_color: "#1977F1",
    // },
    // workbox: {
    //   navigateFallback: "/",
    // },
    // devOptions: {
    //   enabled: true,
    //   type: "module",
    // },
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
