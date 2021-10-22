const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
	console.log(`env`, env);
	console.log(`options`, options);
	return {
		resolve: {
			extensions: ['.js'],
			alias: {
				'~' : path.resolve(__dirname, 'src'),
				// 'assets' : path.resolve(__dirname, 'assets')
			}
		},

		entry: {
			main: './src/main.js',
		},
		output: {
			// filename: 'core.js',
			publicPath: '/',
			clean: true
		},
		
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader',
				},
				{
					test: /\.s?css$/,
					use: [
						'style-loader',
						'css-loader',
						'postcss-loader',
						'sass-loader'
					]
				}
			]
		},

		plugins: [
			new HtmlPlugin({
				template: './src/index.html'
			}),
			new CopyPlugin({
				patterns: [
					{ from: 'static' }
				]
			})
		],

		// devServer: {
		// 	port: 8080,
		// 	open: true,
		// 	historyApiFallback: true
		// }

	}
}
