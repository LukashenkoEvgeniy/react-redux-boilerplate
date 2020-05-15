
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const flexbugs = require('postcss-flexbugs-fixes');

module.exports = {
  plugins: [
    flexbugs,
    autoprefixer({
      flexbox: 'no-2009'
    }),
    cssnano({
      preset: ['default', {
        discardComments: {
          removeAll: true
        }
      }]
    })
  ]
};
