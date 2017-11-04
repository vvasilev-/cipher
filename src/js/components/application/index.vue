<template>
	<div class="min-vh-100 bg-near-white archivo">
		<div class="w-90 w-70-m w-50-l center">
			<the-header></the-header>

			<password-input
				:value="password"
				:onChange="setPassword" />

			<password-meter :score="score" />

			<time-estimator />
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
	import TimeEstimator from 'components/time-estimator';

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
			PasswordMeter,
			TimeEstimator
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
				'password': 'getPassword',
				'score': 'getScore'
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
