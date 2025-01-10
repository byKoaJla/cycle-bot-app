// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
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