const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.json'],
        // alias: {
        //     '@css': path.resolve(__dirname, 'src/styles'),
        // },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [new CssMinimizerWebpackPlugin()],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [{
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|webp|svg|gif)$/,
                type: 'asset/resource',
            },
        ],
    },
}