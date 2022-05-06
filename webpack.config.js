const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.[hash].js",
        clean: true,
    },
    mode: "development",
    devServer: {
        compress: false,
        port: 4200,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Virtual Keyboard",
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};