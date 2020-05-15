const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    // splitChunks: {
    //   chunks: "all",
    // },
    // splitChunks: {
    //   chunks: 'all',
    //   maxInitialRequests: Infinity,
    //   minSize: 0,
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name(module) {
    //         // get the name. E.g. node_modules/packageName/not/this/part.js
    //         // or node_modules/packageName
    //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
    //
    //         // npm package names are URL-safe, but some servers don't like @ symbols
    //         return `npm.${packageName.replace('@', '')}`;
    //       },
    //     },
    //   }
    // },
    minimizer: [new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          reduce_funcs: false
        }
      }
    }), new OptimizeCssAssetsPlugin()],
  },
  entry: {
    app: ['@babel/polyfill', './src/index.js']
  },
  output: {
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
    path: path.resolve('./', './dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].[chunkhash:6].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./', './public/index.html'),
      inlineSource: '.(css)$'
    }),
    new webpack.DefinePlugin({
      'process.env': {
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve('./', 'src'),
        exclude: path.resolve('./', 'node_modules'),
        use: 'babel-loader',
        resolve: { extensions: ['.js', '.jsx'] }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false,
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            },
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  },

});
