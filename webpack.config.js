const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const extractLess = new ExtractTextPlugin('./common/css/[name].css');  //跟随output.path

const SERVER = require('./webpack.server.js');

const config = {
    entry: {
        login: ['babel-polyfill', './src/pages/login/login.js'],
        index: ['babel-polyfill', './src/pages/index/index.js']
    },
    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'js/[name].js',
    },
    //devtool: 'eval-source-map',
    devServer: SERVER,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                query: {
                  presets: [
                    ["latest", {
                      "es2016": { "modules": false }
                    }],
                    "stage-2"
                  ]
                }
            },
            {
                test: /\.vue$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'html-loader'
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.jpg|.png|.jpeg$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'common/img',  //图片输出目录
                        publicPath: 'common/img'   //发布的路径
                    }
                }]
            }
        ]
    },
    plugins: [
        extractLess,
        Autoprefixer,
        new HtmlWebpackPlugin({
            template: 'login.html',
            filename: 'login.html',  //目录随output
            hash: true, //哈希模式, 引入的JS CSS都会加一个哈希值
            inject: true,
            chunks: ['login'], //引入哪些模块,与entry配对.默认是全加载
            minify: {
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true, //移除空白字符
                minifyJS: true, 
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',  //目录随output
            hash: true, //哈希模式, 引入的JS CSS都会加一个哈希值
            inject: true,
            chunks: ['index'], //引入哪些模块,与entry配对.默认是全加载
            minify: {
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true, //移除空白字符
                minifyJS: true, 
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ],
    resolve: {
        alias: {
            '@common': path.join(__dirname, 'src/common'),
            '@components': path.join(__dirname, 'src/components'),
            '@src': path.join(__dirname, 'src'),
            '@api': path.join(__dirname, 'src/api')
        }
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex'
    },
    watch: true
}

module.exports = config;