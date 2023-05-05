const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ["masjid.mhasnain.dev", "masjid.test.mhasnain.dev"]
  }
})
