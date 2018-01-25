const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  // 入口
  entry: {
    app: "./src/index.js",
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title: 'Output Management'})
  ],
  // 输出
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  }
};