const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

let mode = "development"

if (process.env.NODE_ENV?.trim() === "production") {
    mode = "production"
}

module.exports = {
    mode: mode,
    devtool: "source-map",

    output: {
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                // type: "asset/resource" asset ll be good
                type:"asset/resource",

            },
            {
                test: /\.css$/i,
                use: [{
                    loader: miniCssExtractPlugin.loader,
                    options : { publicPath: ""}
                },
                    "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
    plugins: [new miniCssExtractPlugin(), new htmlWebpackPlugin()],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },

}