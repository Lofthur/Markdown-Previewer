const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	use: ['css-loader', 'style-loader']
});

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, './dist')
	},

	module: {
		rules: [{
			test: /\.sass$/,
			use: cssConfig
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}
	]},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Markdown Previewer',
			template: './index.html'
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
			disable: false,
			allChunks: true
		}),

	]
}
