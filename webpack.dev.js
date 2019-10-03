const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

module.exports = webpackMerge(webpackCommonConfig, {
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