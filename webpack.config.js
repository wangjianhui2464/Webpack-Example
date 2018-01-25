const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  // 入口
  entry: {
    app: "./src/index.js",
    another: './src/another-module.js'
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
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 删除 死代码
    new UglifyJSPlugin(),
    // 防止重复引用 使用 插件 CommonsChunkPlugin
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共 bundle 的名称。
    })
  ],
  // 输出
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    // 该地址在 express 服务也会用到。确保发布的服务在根路径
    publicPath: '/'
  }
};