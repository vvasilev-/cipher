/**
 * Export the configuration.
 *
 * @type {Object}
 */
module.exports = {
	bail: true,
	verbose: true,
	testRegex: '/unit/.*\\.spec\\.js$',
	moduleDirectories: [
		'node_modules',
		'src/js'
	],
	moduleFileExtensions: [
		'js',
		'json',
		'vue'
	],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.*\\.vue$': 'jest-vue'
	}
};
