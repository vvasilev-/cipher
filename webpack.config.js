/**
 * Export the configuration.
 * 
 * @param  {String} env
 * @return {Object}
 */
module.exports = env => require(`./webpack.${env}`);
