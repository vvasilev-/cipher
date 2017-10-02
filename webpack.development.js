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
						loader: 'vue-loader'
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
			NODE_ENV: 'development'
		}),

		/**
		 * Extract the CSS.
		 */
		new ExtractTextWebpackPlugin({
			filename: 'css/bundle.css',
			disable: true
		})
	],

	/**
	 * Enable the sourcemaps.
	 */
	devtool: '#eval-source-map',

	/**
	 * Setup webpack-dev-server.
	 */
	devServer: {
		/**
		 * The port on which the server will listen for requests.
		 */
		port: 9000,

		/**
		 * Automatically open the browser.
		 */
		open: true
	},
});
