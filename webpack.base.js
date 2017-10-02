/**
 * The external dependencies.
 */
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Export the configuration.
 *
 * @type {Object}
 */
module.exports = {
	/**
	 * The base directory for resolving entry points.
	 */
	context: path.resolve(__dirname, 'src'),

	/**
	 * The point at which the application starts executing.
	 */
	entry: [
		'./js/main.js'
	],

	/**
	 * Instruct webpack how and where it should output the bundles.
	 */
	output: {
		/**
		 * The name of the output bundle.
		 */
		filename: 'js/bundle.js',

		/**
		 * The name of the output directory.
		 */
		path: path.resolve(__dirname, 'dist')
	},

	/**
	 * Instruct webpack how to treat different types of modules.
	 */
	module: {
		/**
		 * Define the rules used to manipulate the modules.
		 */
		rules: [
			/**
			 * Enable ES201* syntax in JavaScript files.
			 */
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			},

			/**
			 * Enable CSS syntax.
			 */
			{
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				})
			}
		]
	},

	/**
	 * Configure how modules are resolved.
	 */
	resolve: {
		/**
		 * Tell webpack what directories should be searched when resolving modules.
		 */
		modules: [
			'src/js',
			'node_modules'
		],

		/**
		 * Automattically resolve certain extensions.
		 */
		extensions: [
			'.js',
			'.json',
			'.vue'
		]
	},

	/**
	 * Customize the build process.
	 */
	plugins: [
		/**
		 * Generate the main HTML file.
		 */
		new HtmlWebpackPlugin({
			title: 'Cipher',
			template: 'index.html',
			filename: 'index.html',
			inject: true
		})
	]
};
