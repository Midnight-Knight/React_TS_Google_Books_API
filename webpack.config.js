const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx', // путь до основного файла вашего приложения
    output: {
        path: path.resolve(__dirname, 'dist'), // путь до выходной директории
        filename: 'bundle.js' // имя выходного файла
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'] // используем babel-loader и ts-loader для транспиляции TypeScript
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'] // используем css-loader для импорта css файлов, а затем style-loader для внедрения стилей в HTML
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource' // используем asset/resource для импорта изображений и сохранения их в выходной директории
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource' // используем asset/resource для импорта шрифтов и сохранения их в выходной директории
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'] // позволяет импортировать модули без указания расширения
    },
    plugins: [
        new CleanWebpackPlugin(), // очищает выходную директорию перед каждой сборкой
        new HtmlWebpackPlugin({
            template: './public/index.html' // указываем путь до HTML шаблона
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // указываем путь до директории с выходными файлами
        compress: true, // сжатие
        port: 3000 // порт для dev-сервера
    }
};