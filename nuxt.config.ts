// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/fonts/TT-Norms/stylesheet.css"],
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ["uz", "ru"],
    defaultLocale: "uz",
    strategy: 'prefix_except_default',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
