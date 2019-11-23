// setupProxy.js
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  // app.use(
  //   proxy('/api', { //`api`是需要转发的请求 
  //     target: 'http://192.168.90.134:7001', // 这里是接口服务器地址
  //     changeOrigin: true,
  //       secure: false,
  //       pathRewrite: {
  //         "^/api": "/"
  //       },
  //   })
  // );

  app.use(proxy('/pms', {
    target: 'http://192.168.90.134:7001',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/pms": "/"
    },
  }));
}
