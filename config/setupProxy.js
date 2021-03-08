const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app){
    app.use(
        //  常规换源，api换空字符串
        createProxyMiddleware('/api', {
            target: 'http://192.168.100.128:8080',
            changeOrigin: true,
            pathRewrite: {
                '/api': '/public'
            }
        }),
    );
};


