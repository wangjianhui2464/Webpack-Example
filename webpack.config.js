const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',
    vendor: [
      'lodash'
    ]
  },
  optimization:{

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.SplitChunksPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.SplitChunksPlugin({
      name: 'manifest'
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path:
      path.resolve(__dirname, 'dist')
  }
};