const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(webpackCommonConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    hotOnly: false,
    contentBase: 'static',
    openPage: 'base/',
    publicPath: '/base/',
  },
  mode: 'development',
});