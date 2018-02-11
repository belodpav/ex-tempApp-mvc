const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  watch: true,
  devtool: 'eval',
  plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './public/index.html',
    inject: 'body',
  })
  ]
};