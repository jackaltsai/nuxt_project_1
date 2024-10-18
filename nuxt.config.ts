// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  devtools: { enabled: true },
  // nitro: {
  //   output: {
  //     publicDir: path.join(__dirname, 'docs')
  //   }
  // },
  app: {
    head: {
      title: '台灣國際反詐騙協會',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
    },
    baseURL: '/nuxt_project_1/',
    // process.env.NODE_ENV === 'production' ? '/nuxt_project_1/' : '/',
    buildAssetsDir: '/static/'
  },
  experimental: {
    payloadExtraction: false
  },
  // css: [
  //   '~/assets/css/main.css',
  // ],
})