let path=require("path")
let HtmlWebpackPlugin=require("html-webpack-plugin")
let CleanWebpackPlugin=require("clean-webpack-plugin")
const CopyPlugin = require('copy-webpack-plugin');
let webpack =require("webpack")
module.exports={
    entry:"./src/index.js",
    output:{
        // path:path.join("")
        // path:path.resolve("./dist/"),
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js",
    },
    // mode:"production",
    mode:"development",
    // watch: true,
    devServer:{
        open:true,
        port:3000,
        compress:true,
        contentBase:"./src",
        hot:true,
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                filename:"index.html",
                template:"./src/index.html"
            }
        ),
        new CleanWebpackPlugin(),
        //图片打包用html-widthimg-laoder 处理
        // new CopyPlugin([{
        //     from : path.join(__dirname,"assets"),
        //     to:"./assets"
        // }]),
        new webpack.BannerPlugin("版权属于jakedeng")
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },{
                test:/\.s(a|c)ss$/,
                use:["style-loader","css-loader","sass-loader"]
            },{
                test:/\.(jpg|png|jpeg|bmp|gif|woff|woff2|eot|svg|ttf)/,
                // use:["file-loader"]
                use:{
                    loader:"url-loader",
                    options:{
                        limit:20*1024,
                        outputPath:"images",
                        name:'[name]-[hash:4].[ext]'
                    }
                }
            },{
                test:"/\.js$/",
                use:{
                    loader:"babel-loader",
                    // 这段配置在.babelrc里面
                    // options:{
                    //     presets:[
                    //         "@babel/env"
                    //     ],
                    //     plugins:["@babel/plugin-proposal-class-properties"
                    //     ,"@babel/plugin-transform-runtime"
                    //     ]
                    // }
                },
                exclude:/node_modules/
            },{
                test:/\.htm|html$/,
                use:"html-withimg-loader"
            }
        
        ]
       
           
    },
    // devtool:"evel"
    devtool:"cheap-module-evel-source-map"
}