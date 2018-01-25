const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // 增加开发 source-map 生成 用于开发显示错误代码来源。
  // devtool: 有很多选项，有些会生成source map ，有些生成source map 的不适用 生产环境。
  devtool: 'inline-source-map',

  // 以下配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
  devServer: {
    contentBase: './dist'
  }
});
