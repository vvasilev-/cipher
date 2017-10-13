<template lang="html">
	<header class="pv4 flex flex-row items-center justify-start">
		<the-header-logo></the-header-logo>

		<the-header-nav></the-header-nav>
	</header>
</template>

<script>
	/**
	 * The internal dependencies.
	 */
	import TheHeaderLogo from 'components/the-header-logo';
	import TheHeaderNav from 'components/the-header-nav';

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
			TheHeaderLogo,
			TheHeaderNav
		}
	}
</script>
