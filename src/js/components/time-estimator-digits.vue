<template>
	<div class="flex flex-row justify-center mt3">
		<time-estimator-digits-item
			v-for="(digit, index) in digits"
			:key="index"
			:value="digit" />
	</div>
</template>

<script>
	/**
	 * The internal dependencies.
	 */
	import TimeEstimatorDigitsItem from 'components/time-estimator-digits-item';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'TimeEstimatorDigits',

		/**
		 * The local components.
		 *
		 * @type {Object}
		 */
		components: {
			TimeEstimatorDigitsItem
		},

		/**
		 * The exposed properties.
		 *
		 * @type {Object}
		 */
		props: {
			value: {
				type: String,
				required: true
			}
		},

		/**
		 * The computed properties.
		 *
		 * @type {Object}
		 */
		computed: {
			/**
			* Get the digits.
			*
			* @return {String}
			*/
			digits() {
				return this.value.split('');
			}
		}
	}
</script>
