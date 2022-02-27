<template>
<div class="preparation">
	<PackingList :items="items" />
</div>
</template>

<script>
import PackingList from '../components/PackingList.vue'

export default {
	name: 'Preparation',
	components: {
		PackingList,
	},
	computed: {
		items() {
			// let activities = this.$root.$data.activitiesToDo;
			// let itemArrays = activities.map(activity => activity.items);

			return this.$root.$data.itemsToBring;
		}
	}
}
</script>
