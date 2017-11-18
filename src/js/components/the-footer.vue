<template lang="html">
	<footer class="mt4 tc">
		<a href="#" class="dib light-silver no-underline mh2 dim">
			<base-icon name="github" />
		</a>
	</footer>
</template>

<script>
	/**
	 * The internal dependencies.
	 */
	import BaseIcon from 'components/base-icon';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'TheFooter',

		/**
		 * The local components.
		 *
		 * @type {Object}
		 */
		components: {
			BaseIcon
		}
	}
</script>
