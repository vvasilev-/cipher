/**
 * Set the module as namespaced.
 *
 * @type {Boolean}
 */
export const namespaced = true;

/**
 * The mutations types.
 *
 * @type {String}
 */
const SET = 'set';
const RESET = 'reset';

/**
 * The initial state.
 *
 * @type {Object}
 */
export const state = {
	value: ''
};

/**
 * The actions.
 *
 * @type {Object}
 */
export const actions = {
	setPassword({ commit }, value) {
		commit(SET, value);
	},

	resetPassword({ commit }) {
		commit(RESET);
	}
};

/**
 * The mutations.
 *
 * @type {Object}
 */
export const mutations = {
	[SET](state, value) {
		state.value = value;
	},

	[RESET](state) {
		state.value = '';
	}
};

/**
 * The getters.
 *
 * @type {Object}
 */
export const getters = {
	getPassword: ({ value }) => value
};
