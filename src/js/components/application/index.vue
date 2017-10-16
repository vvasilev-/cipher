<template>
	<div class="min-vh-100 bg-near-white archivo">
		<div class="w-90 w-70-m w-50-l center">
			<the-header></the-header>

			<password-input></password-input>
		</div>
	</div>
</template>

<script>
	/**
	 * The internal dependencies.
	 */
	import TheHeader from 'components/the-header';
	import PasswordInput from 'components/password-input';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'Application',

		/**
		 * The local components.
		 *
		 * @type {Object}
		 */
		components: {
			TheHeader,
			PasswordInput
		}
	}
</script>
