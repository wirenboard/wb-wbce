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
          name: 'viewport',
          content: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        },
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
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['last 4 versions', 'iOS >= 8']
      }
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
    'vue3-carousel-nuxt',
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
  },
  gtag: {
    id: 'G-JR4JBWZMJL',
    config: {
      send_page_view: true,
    }
  }
})
