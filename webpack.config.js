var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
    //输入文件
    entry: [
        'webpack-dev-server/client?http://localhost:8070',
        'webpack/hot/only-dev-server',
        __dirname + '/src/scripts/app.js'
    ],

    //输出
    output: {
        //__dirname当前路径
        path: __dirname + '/prd',
        filename: 'bundle.js'
    },

    //模块配置
    module: {
        //配置loader
        loaders: [{
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.jsx$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                // loader: 'style!css!sass'
                //extract('备用事件（编译出错时执行）'，‘抽离前需要执行的事件’)
                loader: ET.extract('style', 'css!sass')
            },
            {
                test: /\.string$/,
                loader: 'string'
            }, {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader'
            }
        ]
    },
    //定义vue
    vue: {
        loaders: {
            //vue里的js用babel解析
            js: 'babel'
        }
    },

    //配置source-map
    devtool: 'source-map',
    plugins: [
        //抽离文件输出位置
        new ET('./bundle.css'),

        new webpack.HotModuleReplacementPlugin()
    ]
}