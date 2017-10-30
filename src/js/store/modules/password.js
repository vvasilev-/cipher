/**
 * The external dependencies.
 */
import zxcvbn from 'zxcvbn';
import { addSeconds, formatDistanceStrict } from 'date-fns';

/**
 * The `date-fns` package will start to return
 * "Invalid Date" when the seconds are bigger than
 * the value specified below.
 *
 * @type {Number}
 */
const MAX_ALLOWED_SECONDS = 1e12;

/**
 * The distance after which we don't care
 * about the actual value.
 *
 * @type {Number}
 */
const MAX_DISTANCE_IN_YEARS = 30000;

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
	crackTime: 0,
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
			const {
				score,
				crack_times_seconds: {
					online_no_throttling_10_per_second: crackTime
				},
				crack_times_display
			} = zxcvbn(value);

			commit(SET, {
				crackTime,
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
	[SET](state, { crackTime, score, value }) {
		state.crackTime = crackTime;
		state.score = score;
		state.value = value;
	},

	[RESET](state) {
		state.crackTime = 0;
		state.score = -1;
		state.value = '';
	}
};

/**
 * The getters.
 *
 * @type {Object}
 */
export const getters = {
	getPassword: ({ value }) => value,
	getScore: ({ score }) => score,
	getCrackTimeAsDistance: ({ crackTime }) => {
		if (crackTime >= MAX_ALLOWED_SECONDS) {
			return `${MAX_DISTANCE_IN_YEARS}+ years`;
		}

		const now = new Date;
		const future = addSeconds(now, crackTime);

		return formatDistanceStrict(now, future);
	}
};
