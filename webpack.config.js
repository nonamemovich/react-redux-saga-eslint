const htmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new htmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

const path = require('path');

const cssLoader = {
    loader: "css-loader",
    options: {
      modules: true,
      importLoaders: 2,
      sourceMap: true
     }
};

const styleLoader = {
	loader: "style-loader"
};

module.exports = {
	entry: { index: [ '@babel/polyfill', './src/index.js'] },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundled.js'
	},
	module: {
		rules:[
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader : "eslint-loader",
					options: {
						cache: false,
						formatter: 'codeframe'
					}
				},
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}, {
				test: /\.scss$/,
				use: [ styleLoader, cssLoader]
			}
		]
	},
	plugins: [htmlPlugin]
};