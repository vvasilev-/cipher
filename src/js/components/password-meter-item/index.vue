<template>
	<span class="db w1 h1 br-100 v-mid mh1" :class="[background, opacity]"></span>
</template>

<script>
	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'PasswordMeterItem',

		/**
		 * The exposed properties.
		 *
		 * @type {Object}
		 */
		props: {
			color: {
				type: String,
				required: true
			},

			active: {
				type: Boolean,
				default: false
			}
		},

		/**
		 * The computed properties.
		 *
		 * @type {Object}
		 */
		computed: {
			/**
			* Get the CSS class that represents the background color.
			*
			* @return {String}
			*/
			background() {
				return `bg-${this.color}`;
			},

			/**
			 * Get the CSS class that represents the current level of opacity.
			 *
			 * @return {String}
			 */
			opacity() {
				return this.active ? 'o-100' : 'o-20';
			}
		}
	}
</script>
