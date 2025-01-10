// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  app: {
    head: {
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
    },
  },
  modules: [['@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }
  ], '@nuxt/image'],
  imports: {
    dirs: ['store', 'assets/img'],
  },
  css: ["./assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})