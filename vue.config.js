module.exports = {
    chainWebpack: config => {
      config.performance
        .maxEntrypointSize(400000)
        .maxAssetSize(400000)
    },
    configureWebpack: {
      devtool: 'source-map'
    }
  }