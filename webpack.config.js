const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
		]
	},
	plugins: [
		new BrowserSyncPlugin({
			server: 'dist',
			host: 'localhost',
			port: 8080
		})
	]
};
