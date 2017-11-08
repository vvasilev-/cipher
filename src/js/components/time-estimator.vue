<template>
	<transition enter-active-class="animated fadeIn">
		<div class="mt4" v-show="visible">
			<time-estimator-separator />

			<time-estimator-headline />

			<time-estimator-digits :value="digits" />

			<time-estimator-units :value="units" />
		</div>
	</transition>
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
		 * The local state.
		 *
		 * @return {Object}
		 */
		data() {
			return {
				visible: false
			};
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
			}
		},

		/**
		 * A lifecycle hook.
		 *
		 * @return {void}
		 */
		mounted() {
			const unwatch = this.$watch('time', value => {
				if (value > 0) {
					this.visible = true;

					unwatch();
				}
			});
		}
	}
</script>
