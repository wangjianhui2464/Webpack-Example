const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: ['lodash']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  optimization: {
    // minimize: true,
    // runtimeChunk: true,
    occurrenceOrder: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",      // 必须三选一： "initial" | "all" | "async"(default)
          test: /react|lodash/,   // 正则规则验证，如果符合就提取 chunk
          name: "vendor",         // splitChunk name
          enforce: true
        }
      }
    }
  },
  output: {
    path: path.join(__dirname, "dist"),
    // filename: "[name].js",
    // chunkFilename: "[name].chunk.js"
  }
};