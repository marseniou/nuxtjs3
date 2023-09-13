// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  imports:{
    dirs: ['stores']
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL ?? 'http://localhost:3000',
      backendUrl: process.env.BACKEND_URL ?? 'http://localhost:8000',
      apiUrl: process.env.API_URL ?? 'http://localhost:8000/api',
    }
  },
  

  css: [
    '@/assets/css/main.css',
  ],
  
});

