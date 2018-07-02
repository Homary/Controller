const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const extractLess = new ExtractTextPlugin('./common/css/[name].css');  //跟随output.path

const config = {
    entry: {
        login: './src/pages/login/login.js',
        Vue: 'vue/dist/vue.min.js'
    },
    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'js/[name].js'
    },
    //devtool: 'eval-source-map',
    devServer: {
        contentBase: './build',
        port: 8080,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"]
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
                exclude: path.resolve(__dirname, 'node_modules'),
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
                        outputPath: './common/img',  //图片输出目录
                        publicPath: '/common/img'   //发布的路径
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
            hash: false, //哈希模式, 引入的JS CSS都会加一个哈希值
            inject: true,
            chunks: ['login', 'Vue'], //引入哪些模块,与entry配对.默认是全加载
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
    watch: true
}

module.exports = config;