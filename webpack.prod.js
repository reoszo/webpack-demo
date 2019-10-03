const path = require('path');
const webpackMerge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackCommonConfig = require('./webpack.common.js');

module.exports = webpackMerge(webpackCommonConfig, {
  devtool: 'source-map',
  mode: 'none',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
});