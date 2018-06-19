const axios = require('axios')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Marketing Campaign Company - Experts in Digital Marketing and Public Relations',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Experts in marketing strategy & planning, digital marketing, public relations, and communications' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i|Montserrat:400,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fd9f44' },
  /*
   ** CSS or SCSS
   */
  css: ['@/assets/app.scss'],
  /*
   ** Plugins
   */
  plugins: [
     { src: '~/plugins/uikit.js', ssr: false }
  ], 
  /*
   ** Modules
   */
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
