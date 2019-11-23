// setupProxy.js
const proxy = require('http-proxy-middleware')

// module.exports = function (app) {
//   app.use(
//     proxy('/api', { //`api`是需要转发的请求 
//       target: 'http://192.168.90.134:7001', // 这里是接口服务器地址
//       changeOrigin: true,
//     })
//   )
// }

module.exports = function (app) {
  app.use(
    proxy('/api', { //`api`是需要转发的请求 
      target: 'http://192.168.90.134:7001', // 这里是接口服务器地址
      changeOrigin: true, 
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}

// '/localMock/': {
//         target: 'http://10.30.113.15:3000',
//         ws: true,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/localMock': ''
//         }
//       }
