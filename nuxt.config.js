export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'anim_task',
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


  
    //You will have to add this new object if it doesn't exist already
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.scss',
    "~assets/css/bootstrap-grid.min.css",
    ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: ['style-loader', 'css-loader', 'sass-loader'],
  //     },
  //   ],
  // },
  // render: {
  //   bundleRenderer: {
  //     shouldPreload: (file, type) => {
  //       return ['script', 'style', 'font'].includes(type)
  //     },
  //   },
  // },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
   
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
  ],
  gsap: {
    extraPlugins: {
        cssRule: true,
        draggable: false,
        easel: false,
        motionPath: false,
        pixi: false,
        text: false,
        scrollTo: true,
        scrollTrigger: true,
        
      },
      extraEases: {
        expoScaleEase: false,
        roughEase: false,
        slowMo: false,
      }
  },

  styleResources: {
    scss: [
      '~assets/css/main.scss'
    ],

  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["qrcode-generator-es6", "gsap",],

  }
}
