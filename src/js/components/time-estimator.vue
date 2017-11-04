<template>
	<div class="mt4" v-show="isVisible">
		<time-estimator-separator />

		<time-estimator-headline />

		<time-estimator-digits :value="digits" />

		<time-estimator-units :value="units" />
	</div>
</template>

<script>
	/**
	 * The external dependencies.
	 */
	import { mapGetters } from 'vuex';

	/**
	 * The internal dependencies.
	 */
	import TimeEstimatorSeparator from 'components/time-estimator-separator';
	import TimeEstimatorHeadline from 'components/time-estimator-headline';
	import TimeEstimatorDigits from 'components/time-estimator-digits';
	import TimeEstimatorUnits from 'components/time-estimator-units';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'TimeEstimator',

		/**
		 * The local components.
		 *
		 * @type {Object}
		 */
		components: {
			TimeEstimatorSeparator,
			TimeEstimatorHeadline,
			TimeEstimatorDigits,
			TimeEstimatorUnits
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
				'time': 'getCrackTime',
				'distance': 'getCrackTimeAsDistance'
			}),

			/**
			 * Get the digits & units from the distance.
			 *
			 * @return {String[]}
			 */
			distanceChunks() {
				return this.distance.split(' ');
			},

			/**
			 * Extract the digits from the distance.
			 *
			 * @return {String}
			 */
			digits() {
				return this.distanceChunks[0];
			},

			/**
			 * Extract the units from the distance.
			 *
			 * @return {String}
			 */
			units() {
				return this.distanceChunks[1];
			},

			/**
			 * Check whether the estimator should be visible.
			 *
			 * @return {Boolean}
			 */
			isVisible() {
				return this.time > 0;
			}
		}
	}
</script>
