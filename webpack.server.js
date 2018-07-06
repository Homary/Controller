const proxy = require('./webpack.proxy.js');

module.exports = {
    contentBase: '/build',
    port: 8080,
    inline: true,
    disableHostCheck: true,
    index: 'login.html',
    proxy: proxy
}