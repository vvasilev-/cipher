<template>
	<a href="/" class="db no-underline">
		<icon class="light-red" name="lock" width="w2" height="h2"></icon>

		<span class="dib ml1 v-mid f3 lh-solid dark-gray">Cipher</span>
	</a>
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
		name: 'TheHeaderLogo',

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
