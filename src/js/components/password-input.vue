<template>
	<input
		type="text"
		class="db w-90 w-80-m w-60-l center ba b--moon-gray bg-white-80 outline-0 f3 tc pa2 archivo br2 shadow-4"
		:value="password"
		@input="handleChange" />
</template>

<script>
	/**
	 * The external dependencies.
	 */
	import { mapActions, mapGetters } from 'vuex';



	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'PasswordInput',

		/**
		 * The computed properties.
		 *
		 * @type {Object}
		 */
		computed: {
			/**
			 * Map the store's state.
			 */
			...mapGetters('password', {
				'password': 'getPassword'
			}),

			...mapGetters('ui', {
				'dirty': 'isDirty'
			})
		},

		/**
		 * The public API.
		 *
		 * @type {Object}
		 */
		methods: {
			/**
			 * Map the store's actions.
			 */
			...mapActions('password', [
				'setPassword'
			]),

			...mapActions('ui', [
				'markUiAsDirty'
			]),

			/**
			 * Handle the change the input.
			 *
			 * @param  {Object} e
			 * @return {void}
			 */
			handleChange(e) {
				this.setPassword(e.target.value);

				if (!this.dirty) {
					this.markUiAsDirty();
				}
			}
		}
	}
</script>
