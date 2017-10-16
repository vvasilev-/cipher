/**
 * The external dependencies.
 */
import Vue from 'vue';
import Vuex from 'vuex';

/**
 * The internal dependencies.
 */
import * as password from 'store/modules/password';

/**
 * Install the plugin.
 */
Vue.use(Vuex);

/**
 * Initialize the store.
 */
export default new Vuex.Store({
	modules: {
		password
	}
});
