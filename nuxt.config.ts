import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: [
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxtjs/google-fonts',
  ],
  app: {
    buildAssetsDir:
      process.env.NODE_ENV === 'development' ? undefined : 'assets',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'RIOT Barbershop',
      titleTemplate: '%s',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' },
      ],
    },
  },
  site: { url: 'https://Edvard-strigun.github.io' },
  robots: { robotsTxt: false },
  googleFonts: {
    families: {
      Oswald: {
        normal: [700],
      },
      Montserrat: {
        normal: [300, 400, 700],
      },
    },
  },
  vite: {
    // @ts-expect-error - No types for this plugin
    plugins: [tailwindcss(), svgLoader()],
  },
  css: ['~/assets/css/main.css'],
  i18n: {
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? undefined
        : 'https://Edvard-strigun.github.io/riot-barbershop/',
    defaultLocale: 'uk',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    locales: [
      {
        code: 'uk',
        name: 'Українська',
        language: 'uk-UA',
        dir: 'ltr',
        file: 'uk.json',
      },
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        dir: 'ltr',
        file: 'en.json',
      },
    ],
  },
  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    },
  },
});
