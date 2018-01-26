# webpack 4.0.0-alpha.0 ~ alpha.5 新特性

着重整理日常用到的配置点。

## 环境

1. 不支持 Node 4

## 用法

1. 必须选择 mode（生产 | 开发）
    
    - 生产模式：
        - 启用了各种类型的优化来生成最佳化的bundle
        - 不支持监控
        - 使所有的模块打包在一起（即：作用域提升）
    
    - 开发模式：
        - 可以为开发提供注释和附加提示，并启用了eval devtool
        - 优化了快速增量重建
        
    - 通用项
        - `optimization.*` 构建自定义的模式
        - `process.env.NODE_ENV` 设置生产和开发（）
        
```text
// webpack.production.config.js
  module.exports = {
+   mode: "production",
    plugins: [
-     new UglifyJsPlugin(/* ... */),
-     new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
-     new webpack.optimize.ModuleConcatenationPlugin(),
-     new webpack.NoEmitOnErrorsPlugin()
    ]
  }
  
对比
  
// webpack.development.config.js
  module.exports = {
+   mode: "development",
    plugins: [
-     new webpack.NamedModulesPlugin(),
-     new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
    ]
  }
```