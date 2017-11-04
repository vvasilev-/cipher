<template>
	<div class="w-70 center flex flex-row justify-center items-center">
		<span class="flex-auto bt b--moon-gray"></span>

		<icon
			class="mh2 moon-gray"
			name="clock" />

		<span class="flex-auto bt b--moon-gray"></span>
	</div>
</template>

<script>
	/**
	 * The internal dependencies.
	 */
	import Icon from 'components/icon';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'TimeEstimatorSeparator',

		/**
		 * The local components.
		 *
		 * @type {Object}
		 */
		components: {
			Icon
		}
	}
</script>
