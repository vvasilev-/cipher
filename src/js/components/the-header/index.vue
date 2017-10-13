<template lang="html">
	<header class="pv4 flex flex-row items-center justify-start">
		<the-header-logo></the-header-logo>
	</header>
</template>

<script>
	/**
	 * The internal dependencies.
	 */
	import TheHeaderLogo from 'components/the-header-logo';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'TheHeader',

		/**
		 * The local components.
		 *
		 * @type {Object}
		 */
		components: {
			TheHeaderLogo
		}
	}
</script>
