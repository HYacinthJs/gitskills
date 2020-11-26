/* eslint-disable */
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
// vue.config.js
module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://sobuyqc.suobeitrade.com/api/',
                // target:'http://10.5.5.173:8081/sobuy',
                // target:"http://127.0.0.1:8081",
                // target:'http://61.153.231.54:2114/api',

                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
    configureWebpack: config => {
    if (process.env.NODE_ENV === 'production' ) {
    return {
        plugins:[
            new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.js$|\.ts$|\.scss$|\.html$|\.css/,
                threshold: 10240,
                minRatio: 0.8,
                deleteOriginalAssets:false
            })
        ]
    }
}
plugins: [

    new webpack.ProvidePlugin({

        $:"jquery",

        jQuery:"jquery",

        "windows.jQuery":"jquery"

    })

]
externals: {}
config.externals = {
    "BMap": "BMap",
    'echarts': 'echarts',
}
},
pwa:{
    iconPaths:{
        favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
    }
},
}