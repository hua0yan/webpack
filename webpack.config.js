const {join} =require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    mode:'production',
    entry:'./src/main.js',
    output:{
        path:join(__dirname, 'lib'),
        filename:'index.js',
        clean: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html',
        })
    ],
    devServer:{
        open:true,
        port:8080,
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.less$/i,
                use: [ "style-loader", "css-loader", 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize:20*1024
                    }
                },
                generator:{
                    filename:'images/[hash:6][ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash:6][ext]'
                }
            },
            {
                test:/\.js$/i,
                use:['babel-loader']
            }
        ]
    }

}