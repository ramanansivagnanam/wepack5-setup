const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development"

if(process.env.NODE_ENV?.trim() === "production") {
    mode = "production"
}

module.exports = {
    mode : mode,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [miniCssExtractPlugin.loader, "css-loader"]
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
    plugins : [ new miniCssExtractPlugin()],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    }
}