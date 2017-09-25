/**
 * The external dependencies.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');

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

	/**
	 * Customize the build process.
	 */
	plugins: [
		/**
		 * Set the environment.
		 */
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development'
		})
	]
});
