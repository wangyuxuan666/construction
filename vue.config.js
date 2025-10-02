module.exports = {
  publicPath: './',
  // 自动打开端口号
  devServer: {
    host: 'localhost',
    port: 8088,
    https: false,
    hot: false,
    proxy: null
  },
  // 全局less
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 这里填入你的样式文件地址
          resources: './src/style/index.less'
        })
        .end()
    })
  }
}
