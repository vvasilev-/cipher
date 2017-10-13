<template>
	<a :href="to" class="dib light-red no-underline mh2 dim" :title="title">
		<icon :name="icon" />
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
		name: 'TheHeaderNavLink',

		/**
		 * The exposed properties.
		 *
		 * @type {Object}
		 */
		props: {
			to: {
				type: String,
				required: true
			},

			icon: {
				type: String,
				required: true
			},

			title: {
				type: String,
				required: true
			}
		},

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
