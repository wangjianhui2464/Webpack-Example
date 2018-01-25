const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // 入口
  entry: {
    app: "./src/index.js",
  },
  // 增加开发 source-map 生成 用于开发显示错误代码来源。
  // devtool: 有很多选项，有些会生成source map ，有些生成source map 的不适用 生产环境。
  devtool: 'inline-source-map',

  // 以下配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title: 'Hot Module Replacement'}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 输出
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    // 该地址在 express 服务也会用到。确保发布的服务在根路径
    publicPath: '/'
  }
};