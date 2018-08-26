module.exports = {
  head: {
    title: 'hundo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Information about the Hundo Discord bot',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: { color: '#3B8070' },

  sassResources: ['@/assets/styles/mixins.scss'],

  css: [
    'bootstrap/scss/bootstrap-reboot.scss',
    'bootstrap/scss/bootstrap-grid.scss',
  ],

  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
