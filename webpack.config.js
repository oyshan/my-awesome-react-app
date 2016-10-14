var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Check if we are running production mode
 */
var isProduction = process.env.NODE_ENV == 'production';

/**
 * Create an array of plugins that
 * we'll use in our webpack config
 */
var plugins = [];

/**
 * Forward process.env.NODE_ENV into the bundle
 * to enable React.js production mode
 */
plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
}))

/**
 * Do code de-duping and minification
 * when running production mode
 */
plugins.push(new HtmlWebpackPlugin({
		title: 'My React App',
		template: 'index.template.html',
		inject: 'body'
	}));
if (isProduction) {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
 	devtool: isProduction ? 'source-map' : 'inline-source-map',

	entry: [
		'./src/entry.js'
	],

	output: {
		path: './public/',
		publicPath: '/',
		filename: 'bundle.js'
	},

	plugins: plugins,

	module: {
	    loaders: [{
	      test: /\.jsx?$/,
	      loaders: ['babel'], // ['babel-loader'] also works
	      exclude: /node_modules/,
	    }]
	},
};