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
const MARK_AS_DIRTY = 'mark-as-dirty';

/**
 * The initial state.
 *
 * @type {Object}
 */
export const state = {
	dirty: false
};

/**
 * The actions.
 *
 * @type {Object}
 */
export const actions = {
	markUiAsDirty({ commit }) {
		commit(MARK_AS_DIRTY);
	}
};

/**
 * The mutations.
 *
 * @type {Object}
 */
export const mutations = {
	[MARK_AS_DIRTY](state) {
		state.dirty = true;
	}
};

/**
 * The getters.
 *
 * @type {Object}
 */
export const getters = {
	isDirty: ({ dirty }) => dirty
};
