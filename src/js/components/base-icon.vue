<template>
	<span class="relative dib v-mid f0 lh-solid" :class="[width, height, padding]" v-html="icon"></span>
</template>

<script>
	/**
	 * The external dependencies.
	 */
	import feather from 'feather-icons';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'Icon',

		/**
		 * The exposed properties.
		 *
		 * @type {Object}
		 */
		props: {
			name: {
				type: String,
				required: true
			},

			width: {
				type: String,
				default: 'w1'
			},

			height: {
				type: String,
				default: 'h1'
			},

			padding: {
				type: String,
				default: 'pa1'
			}
		},

		/**
		 * The computed properties.
		 *
		 * @type {Object}
		 */
		computed: {
			/**
			 * Get the icon as a SVG element.
			 *
			 * @return {String}
			 */
			icon() {
				return feather.toSvg(this.name, { 'class': 'aspect-ratio--object' });
			}
		}
	}
</script>
