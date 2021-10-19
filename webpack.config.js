const path = require('path');

let mode = "development"

if(process.env.NODE_ENV.trim() === "production") {
    mode = "production"
}

module.exports = {
    mode : mode,
    devtool: "source-map",
    module: {
        rules: [
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
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    }
}