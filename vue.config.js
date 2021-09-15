//全局配置文件
const path = require('path');

module.exports = {
    devServer: {
        //配置静态资源目录
        contentBase: path.join(__dirname, 'public'),
        //设置开发服务器的端口号
        port: 3210,
    },
    publicPath: "./",
    //配置webpack相关
    configureWebpack: {
        //解析
        resolve: {
            //配置路径别名
            alias: {
                '@v': path.resolve(__dirname, 'src/views'),
                '@c': path.resolve(__dirname, 'src/components'),
                '@a': path.resolve(__dirname, 'src/assets')
            }
        }
    },
    // build: {
    //     index: path.resolve(__dirname, '../dist/index.html'),
    //     assetsRoot: path.resolve(__dirname, "../dist"),
    //     assetsSubDirectory: 'static',
    //     assetsPublicPath: './',
    // }
};