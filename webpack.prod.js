const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

module.exports = webpackMerge(webpackCommonConfig, {
  devtool: 'source-map',
  mode: 'production',
});