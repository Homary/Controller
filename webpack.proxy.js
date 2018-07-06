module.exports = [{
    context: ['/user/*', '/system/*'],
    target: 'http://192.168.30.12:9090',
    changeOrigin: true
}]