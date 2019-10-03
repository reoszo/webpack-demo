const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!a.test'
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'html created by webpack'
    }),
  ],
  output: {
    filename: '[name].bundle@[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};