<template>
	<span class="bg-light-red f1 white b pa2 mh1 br1">{{ value }}</span>
</template>

<script>
	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'TimeEstimatorDigitsItem',

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
		}
	}
</script>
