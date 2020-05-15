const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve('./', './js'),
  },
  devServer: {
    contentBase: path.join('./', 'public'),
    historyApiFallback: true,
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: path.resolve('./', './public/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {

      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.(js|jsx)/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      //   options: {
      //     emitError: false,
      //     emitWarning: false
      //   }
      // },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ["react-hot-loader/babel"]
          },
        },
        exclude: /node_modules/,
        include: path.resolve('./', "./src"),
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ]
  },

});
