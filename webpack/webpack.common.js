const path = require('path');
const CopyPlugin  = require('copy-webpack-plugin');

const source = path.resolve('./', './public');
const destination = path.resolve('./', './dist');

module.exports = {
  resolve: {
    modules: ['node_modules'],
    alias: {
      '@': path.resolve('./', './src'),
      'common': path.resolve('./', './src/components/common'),
    },
    extensions: ['.jsx', '.js', '.scss', '.css']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: `${source}/favicon`, to: `${destination}/favicon` },
      { from: `${source}/fonts`, to: `${destination}/fonts` },
      { from: `${source}/img`, to: `${destination}/img` },
    ]),
  ],
};
