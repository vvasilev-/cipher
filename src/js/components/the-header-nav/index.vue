<template>
	<nav class="flex flex-row ml-auto">
		<the-header-nav-link to="#" icon="github" title="View source on Github"></the-header-nav-link>

		<the-header-nav-link to="#" icon="star" title="Star us on Github"></the-header-nav-link>
	</nav>
</template>

<script>
	/**
	 * The internal dependencies.
	 */
	import TheHeaderNavLink from 'components/the-header-nav-link';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'TheHeaderNav',

		/**
		 * The local components.
		 *
		 * @type {Object}
		 */
		components: {
			TheHeaderNavLink
		}
	}
</script>
