module.exports = {
  configureWebpack: {
    // It will be merged into the final Webpack config
    plugins: [],
    // devServer: {
    //   https: true,
    // }
  },

  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    moment: {
      locales: [
        'ru',
        // 'en'
      ]
    }
  }
}
