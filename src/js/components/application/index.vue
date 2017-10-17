<template>
	<div class="min-vh-100 bg-near-white archivo">
		<div class="w-90 w-70-m w-50-l center">
			<the-header></the-header>

			<password-input
				:value="password"
				:onChange="setPassword" />

			<password-meter></password-meter>
		</div>
	</div>
</template>

<script>
	/**
	 * The external dependencies.
	 */
	import { mapActions, mapGetters } from 'vuex';

	/**
	 * The internal dependencies.
	 */
	import TheHeader from 'components/the-header';
	import PasswordInput from 'components/password-input';
	import PasswordMeter from 'components/password-meter';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'Application',

		/**
		 * The local components.
		 *
		 * @type {Object}
		 */
		components: {
			TheHeader,
			PasswordInput,
			PasswordMeter
		},

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
			])
		}
	}
</script>
