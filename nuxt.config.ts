// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  devtools: { enabled: true },
  app: {
    head: {
      title: '台灣國際反詐騙協會',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
    },
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt_project_1/' : '/',
    buildAssetsDir: '/static/'
  },
  css: [
    '@/assets/css/main.css',
  ],
})