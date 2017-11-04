<template>
	<p class="f4 tc i gray mt2 mb0">{{ value }}</p>
</template>

<script>
	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'TimeEstimatorUnits',

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
