<template>
	<div class="w-50 center flex flex-row justify-center items-center">
		<span class="flex-auto bt b--moon-gray"></span>

		<slot />

		<span class="flex-auto bt b--moon-gray"></span>
	</div>
</template>

<script>
	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'TimeEstimatorSeparator'
	}
</script>
