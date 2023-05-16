import gql from '@rollup/plugin-graphql';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Farine by Vane - Cachitos',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Farine by Vane - Cachitos',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext',
        },
      ],
      script: [
        {
          type: 'module',
          src: 'https://sandbox.web.squarecdn.com/v1/square.js',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page' },
  },

  modules: [
    // Modules
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/strapi',
    '@unocss/nuxt',
    '@kevinmarrec/nuxt-pwa',
    '@nuxt/image-edge',
    '@sidebase/nuxt-pdf',
    'nuxt-lodash',
  ],

  css: ['@unocss/reset/tailwind.css'],

  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_KEY_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_KEY_DATABASE_URL,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_ID: process.env.FIREBASE_ID,
      FIREBASE_MEASURENT_ID: process.env.FIREBASE_MEASURENT_ID,
      SQUARE_APPLICATION_ID: process.env.SQUARE_APPLICATION_ID,
      SQUARE_LOCATION_ID: process.env.SQUARE_LOCATION_ID,
      // SQUARE_ACCESS_TOKEN: process.env.SQUARE_ACCESS_TOKEN,
      PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    },
  },

  vite: {
    plugins: [gql()],
  },

  lodash: {
    prefix: '_',
    upperAfterPrefix: false,
  },

  pwa: {
    meta: {
      title: 'Farine by Vane',
      name: 'Farine by Vane Aplicación web',
      author: 'Novanet Studio <info@novanet.studio>',
      description: 'Tienda en mano de Farine by Vane',
      theme_color: '#fcd34d',
      lang: 'es',
    },
    manifest: {
      name: 'Farine by Vane Aplicación web',
      short_name: 'Farine by Vane',
      description: 'Tienda en mano de Farine by Vane',
      start_url: '/',
      display: 'standalone',
      background_color: '#feeed7',
    },
    icon: { source: 'static/icon.png' },
    /*workbox: {
      enabled: true,
    },*/
  },

  image: {
    dir: 'assets/img',
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
});
