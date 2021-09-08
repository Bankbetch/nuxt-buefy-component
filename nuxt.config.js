import webpack from 'webpack'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-component-buefy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/validateState', ssr: true },
    { src: '~/plugins/validate', ssr: false },
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/api.js', ssr: true },
    { src: '~/plugins/snackbar.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
    ],
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
    loaders: {
      vue: {
        prettify: false,
      },
    },
    terser: {
      extractComments: true,
      sourceMap: true,
      parallel: true,
      cache: true,
      terserOptions: {
        extractComments: 'all',
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: [
            'console.info',
            'console.debug',
            'console.warn',
            'console.log',
          ],
        },
      },
    },
    babel: {
      compact: false,
    },
  },

  dayjs: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
    defaultTimeZone: 'Asia/Bangkok',
    plugins: [
      'utc',
      'timezone',
      'buddhistEra',
    ],
  },
  serverMiddleware: { '/api': '~/api/index.js' },

  server: {
    port: process.env.PORT,
  },
}
