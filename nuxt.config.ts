// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/webp',
          href: '/favicon.webp',
        }
      ],
      meta: [
        {
          property: 'og:title',
          content: 'Выставка WBCE 2025'
        },
        {
          property: 'og:description',
          content: 'Выставка и конференция по домашней и промышленной автоматизации'
        },
        {
          property: 'og:image',
          content: '/og_image.png'
        },
      ]
    }
  },
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/globals.css',
  ],
  modules: ['@nuxtjs/google-fonts', 'vue-yandex-maps/nuxt'],
  googleFonts: {
    families: {
      Ubuntu: true,
    },
    preload: true,
  },
  yandexMaps: {
    apikey: '1614c77e-4da5-4e31-b9e1-9dbaf4d4c80e',
  },
})
