<template>
	<div class="min-vh-100 flex flex-column justify-center bg-near-white archivo">
		<div class="w-90 w-70-m w-50-l center">
			<the-header />

			<password-input />

			<strength-meter />

			<time-estimator />

			<the-footer />
		</div>
	</div>
</template>

<script>
	/**
	 * The internal dependencies.
	 */
	import TheHeader from 'components/the-header';
	import TheFooter from 'components/the-footer';
	import PasswordInput from 'components/password-input';
	import StrengthMeter from 'components/strength-meter';
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
			TheFooter,
			PasswordInput,
			StrengthMeter,
			TimeEstimator
		}
	}
</script>
