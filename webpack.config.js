const path = require("path");

module.exports = {
  // 入口
  entry: "./src/index.js",
  // 输出
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    // 规则： webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
    rules: [
      {
        // 在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader。
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 图片类后缀 ，使用 file-loader 来处理
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        // 处理字体文件
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
};