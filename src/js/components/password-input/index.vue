<template>
	<input
		type="text"
		class="db w-90 w-80-m w-60-l center ba b--moon-gray bg-white-80 outline-0 f3 tc pa2 archivo br2 shadow-4"
		:value="value"
		@input="onChange($event.target.value)" />
</template>

<script>
	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'PasswordInput',

		/**
		 * The exposed properties.
		 *
		 * @type {Object}
		 */
		props: {
			value: {
				type: String,
				required: true
			},

			onChange: {
				type: Function,
				required: true
			}
		},
	}
</script>
