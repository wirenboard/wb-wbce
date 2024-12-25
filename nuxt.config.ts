// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        }
      ],
      meta: [
        {
          property: 'og:title',
          content: 'Выставка WBCE 2025'
        },
        {
          property: 'og:site_name',
          content: 'Wiren Board WBCE'
        },
        {
          property: 'description',
          content: 'Выставка и конференция по домашней и промышленной автоматизации'
        },
        {
          property: 'og:description',
          content: 'Выставка и конференция по домашней и промышленной автоматизации'
        },
        {
          property: 'keywords',
          content: 'Конференция умный дом, выставка автоматизация, выставка промышленной автоматизации'
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
  modules: [
    '@nuxtjs/google-fonts',
    'vue-yandex-maps/nuxt',
    'yandex-metrika-module-nuxt3',
  ],
  googleFonts: {
    families: {
      Ubuntu: true,
    },
    preload: true,
  },
  yandexMaps: {
    apikey: '1614c77e-4da5-4e31-b9e1-9dbaf4d4c80e',
  },
  yandexMetrika: {
    id: '99316061',
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  }
})
