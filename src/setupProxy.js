/*
  auth: frank
  date: 
*/

// 引入setupProxy中间件、 ng代理解决跨域问题

const proxy = require('http-proxy-middleware')

module.exports = function (app) {

  app.use(
    proxy('/testPackage', {
      target: 'http://192.168.90.134:7001',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/testPackage': '/'
      }
    })
  );
}
