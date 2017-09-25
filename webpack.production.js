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
	 * Customize the build process.
	 */
	plugins: [
		/**
		 * Set the environment.
		 */
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production'
		})
	]
});
