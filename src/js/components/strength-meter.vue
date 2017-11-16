<template>
	<transition enter-active-class="animated fadeIn">
		<div class="flex flex-row justify-center mt3" v-show="dirty">
			<strength-meter-item
				v-for="(level, index) in levels"
				:key="index"
				:color="level.color"
				:active="isLevelReached(level)" />
		</div>
	</transition>
</template>

<script>
	/**
	 * The external dependencies.
	 */
	import { mapGetters } from 'vuex';

	/**
	 * The internal dependencies.
	 */
	import StrengthMeterItem from 'components/strength-meter-item';

	export default {
		/**
		 * The name.
		 *
		 * @type {String}
		 */
		name: 'StrengthMeter',

		/**
		 * The local components.
		 *
		 * @type {Object}
		 */
		components: {
			StrengthMeterItem
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
		 * The computed properties.
		 *
		 * @type {Object}
		 */
		computed: {
			/**
			 * Map the store's state.
			 */
			...mapGetters('password', {
 				'score': 'getScore'
 			}),

			...mapGetters('ui', {
				'dirty': 'isDirty'
			})
		},

		/**
		 * The public API.
		 *
		 * @type {Object}
		 */
		methods: {
			/**
			 * Check whether the password has reached a certain level of strength.
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
