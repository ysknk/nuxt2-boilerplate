import path from 'path'
import { generateDir, baseDir } from './directory.config'
import { head } from './head.config'

// NOTE: pug, stylus vars
const env = {
  root: `${baseDir}`,
  prefix: `p-`
}

export default {
  mode: 'universal',

  env,

  transition: {
    name: 'page',
    mode: 'out-in'
  },

  /*
  ** Headers of the page
  */
  head,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-components.js',
    '~/plugins/vue-scrollto',
    '~/plugins/vue-intersect'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-12301-2',
    //   pageTracking: true
    // }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-user-agent'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {
    extend (config, { isDev, isClient }) {
      function p () {
        return path.resolve(__dirname, ...arguments)
      }
      // find the stylus loader
      [].concat(...config.module.rules.find(e => e.test.toString().match(/\.styl/)).oneOf.map(e => e.use.filter(e => e.loader === 'stylus-loader'))).forEach((stylus) => {
        // stylus.options
        // extend default options
        Object.assign(stylus.options, {
          import: [
            p('assets/css/nib/config.styl'), // first import nibfix
            '~nib/index.styl',
            // '~rupture/rupture/index.styl',

            // require my own configs and variables and mixins and ..
            p('assets/css/common.styl')
          ],
          define: env
        })
      })
    },

    filenames: {
      // app: ({ isDev }) => isDev ? '[name].[hash].js' : '[name].js',
      // chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[name].js',
      app: () => '[name].js',
      chunk: () => '[name].js',
      css: () => '[name].js',
      img: () => '[path][name].[ext]',
      font: () => '[path][name].[ext]',
      video: () => '[path][name].[ext]'
    }
  },

  router: {
    base: baseDir,
    extendRoutes(routes, resolve) {
      for (const route of routes) {
        route.alias = resolve(route.path, 'index.html')
      }
    }
  },
  generate: {
    dir: generateDir
  }
}
