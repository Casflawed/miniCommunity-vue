module.exports = {
    lintOnSave:false,
    devServer: {
        port:5000,
        proxy: {
            "/retwisApi": {
                target: 'http://localhost:8888',    // 目标服务器的根路径
                // pathRewrite: {"^/retwisApi":""},
                ws: true,                           // 开启websocket
                changeOrigin: true,                 // 开启端口号欺骗，值为true代理服务器会更改自己的端口号为目标服务器的端口号
            }
        }
    }
}