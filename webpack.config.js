const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
	mode: "development",
	entry : './src/client/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /(\.css|.scss)$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					}, 
					{
						loader: "css-loader" // translates CSS into CommonJS
					}, 
					{
						loader: "sass-loader" // compiles Sass to CSS
					}
				]
			}, 
			{
				test: /\.(jsx|js)?$/,
				 exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							cacheDirectory: true,
							presets: ['react', 'es2015', 'stage-0'] // 
						}
					}
				]
			}
		]
	},
	plugins: [	
		new webpack.DefinePlugin({
			__isBrowser__: "true",
			
		})
	]
};

const serverConfig = {
	mode: "development",
	entry: ['babel-polyfill', './src/server/server.js'],
	target: 'node',
	externals: [
		nodeExternals({
			// load non-javascript files with extensions, presumably via loaders
			whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
		})
	],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'server.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /(\.css|.scss)$/,
				use: [
					'isomorphic-style-loader',
					{
						loader: "css-loader", // translates CSS into CommonJS
						options: {
						  importLoaders: 1
						}
					},
					{
						loader: "sass-loader" // compiles Sass to CSS
					}
				]
			},
			{
				test: /\.(js)$/,
				 exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	plugins:[
		new webpack.DefinePlugin({
			__isBrowser__: "false"
		})
	]
};

module.exports = [clientConfig, serverConfig];