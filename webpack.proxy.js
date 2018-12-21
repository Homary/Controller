module.exports = [{
    context: ['/user/*', 
        '/system/*', 
        '/screen/*', 
        '/plan/*', 
        '/icon/*',
        '/instruction/*'
    ],
    target: 'http://192.168.31.78:9090',
    changeOrigin: true
}]