/**
 * The external dependencies.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

/**
 * The internal dependencies.
 */
const base = require('./webpack.base');

/**
 * Extract the CSS.
 */
const extractCSS = new ExtractTextWebpackPlugin({
	filename: 'css/bundle.css'
});

/**
 * Export the configuration.
 *
 * @type {Object}
 */
module.exports = merge(base, {
	/**
	 * Instruct webpack how to treat different types of modules.
	 */
	module: {
		/**
		 * Define the rules used to manipulate the modules.
		 */
		rules: [
			/**
			 * Enable Vue single components.
			 */
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
						options: {
							extractCSS
						}
					}
				]
			}
		]
	},

	/**
	 * Customize the build process.
	 */
	plugins: [
		/**
		 * Set the environment.
		 */
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production'
		}),

		/**
		 * Extract the CSS.
		 */
		extractCSS
	]
});
