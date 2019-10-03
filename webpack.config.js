const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};