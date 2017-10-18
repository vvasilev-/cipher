<template>
	<div class="flex flex-row justify-center mt3">
		<password-meter-item
			v-for="(level, index) in levels"
			:key="index"
			:color="level.color"
			:active="isLevelReached(level)" />
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
		},

		/**
		 * The exposed properties.
		 *
		 * @type {Object}
		 */
		props: {
			score: {
				type: Number,
				required: true
			}
		},

		/**
		 * The local state.
		 *
		 * @return {Object}
		 */
		data() {
			return {
				levels: [
					{ color: 'dark-red', score: 0 },
					{ color: 'dark-red', score: 1 },
					{ color: 'gold', score: 2 },
					{ color: 'dark-green', score: 3 },
					{ color: 'dark-green', score: 4 }
				]
			};
		},

		/**
		 * The public API.
		 *
		 * @type {Object}
		 */
		methods: {
			/**
			 * Check whether the password has reached the specified level.
			 * 
			 * @param  {Object}  level
			 * @return {Boolean}
			 */
			isLevelReached(level) {
				return level.score <= this.score;
			}
		}
	}
</script>
