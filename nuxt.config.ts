// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path')
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [],

  vite: {
    resolve: {
      alias: {
        '~/': path.resolve(__dirname),
        '@/': path.resolve(__dirname),
        'assets/': path.resolve(__dirname, 'assets/'),
      }
    }
  }
  
})
