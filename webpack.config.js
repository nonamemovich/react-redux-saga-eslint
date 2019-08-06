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
	entry: { index: [ '@babel/polyfill', './src/index.jsx'] },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundled.js'
	},
	module: {
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			}, {
				test: /\.scss$/,
				use: [ styleLoader, cssLoader]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [htmlPlugin]
};