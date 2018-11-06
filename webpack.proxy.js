module.exports = [{
    context: ['/user/*', 
        '/system/*', 
        '/screen/*', 
        '/plan/*', 
        '/icon/*',
        '/instruction/*'
    ],
    target: 'http://192.168.30.35:9090',
    changeOrigin: true
}]