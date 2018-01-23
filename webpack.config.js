const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/'
	},
	plugins: [
		new BrowserSyncPlugin({
			server: 'dist',
			host: 'localhost',
			port: 8080
		})
	]
};
