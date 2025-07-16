const proxy = require('http-proxy-middleware')
module.exports =  function(app){
  app.use(
    proxy('/api1',{ //api1是需要转发的请求（所有带有/api前缀的请求都会转发给target服务器）
      target: 'http://x.x.x.x:1001', //配置转发目标服务器地址
      changeOrigin: true, //是否隐藏本地ip，不让访问的服务器发现本地配置了代理,一般设置true
      pathRewrite: {'^/api1': ''}, //去除请求前缀/api
    }),
    proxy('/api2',{ //api2是需要转发的请求（所有带有/api前缀的请求都会转发给target服务器）
      target: 'http://x.x.x.x:1002', //配置转发目标服务器地址
      changeOrigin: true, //是否隐藏本地ip，不让访问的服务器发现本地配置了代理,一般设置true
      pathRewrite: {'^/api2': ''}, //去除请求前缀/api
    }),
  )
}