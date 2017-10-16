<template>
	<div class="flex flex-row justify-center mt3">
		<password-meter-item color="dark-red"></password-meter-item>
		<password-meter-item color="dark-red"></password-meter-item>
		<password-meter-item color="gold"></password-meter-item>
		<password-meter-item color="dark-green"></password-meter-item>
		<password-meter-item color="dark-green"></password-meter-item>
	</div>
</template>

<script>
	/**
	 * The internal dependencies.
	 */
	import PasswordMeterItem from 'components/password-meter-item';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'PasswordMeter',

		/**
		 * The local components.
		 *
		 * @type {Object}
		 */
		components: {
			PasswordMeterItem
		}
	}
</script>
