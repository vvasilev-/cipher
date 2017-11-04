<template>
	<div class="mt4">
		<time-estimator-separator />

		<time-estimator-headline />

		<time-estimator-digits />

		<time-estimator-units />
	</div>
</template>

<script>
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
		}
	}
</script>
