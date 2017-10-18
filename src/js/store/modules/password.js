/**
 * The external dependencies.
 */
import zxcvbn from 'zxcvbn';

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
	score: -1,
	value: ''
};

/**
 * The actions.
 *
 * @type {Object}
 */
export const actions = {
	setPassword({ commit }, value) {
		if (value) {
			const { score } = zxcvbn(value);

			commit(SET, {
				score,
				value
			});
		} else {
			commit(RESET);
		}
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
	[SET](state, { score, value }) {
		state.score = score;
		state.value = value;
	},

	[RESET](state) {
		state.value = '';
		state.score = -1;
	}
};

/**
 * The getters.
 *
 * @type {Object}
 */
export const getters = {
	getPassword: ({ value }) => value,
	getScore: ({ score }) => score
};
