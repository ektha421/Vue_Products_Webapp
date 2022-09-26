const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const target = 'http://127.0.0.1:3000'
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      //api 주소로 호출할때 target의 서버로 proxy 설정 
      //호출시 자동으로 서버 주소로 넘어가게 함
      '^/api': {
        target,
        changeOrigin: true
      }
    }
  }
}
