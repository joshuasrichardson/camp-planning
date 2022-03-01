<template>
<div class="preparation">
	<PackingList :items="items" />
	<NavContainer prevLink="Activities" nextLink="none" />
</div>
</template>

<script>
import PackingList from '../components/PackingList.vue'
import NavContainer from '../components/NavContainer.vue'

export default {
	name: 'Preparation',
	components: {
		PackingList,
		NavContainer,
	},
	computed: {
		items() {
			return this.$root.$data.itemsToBring;
		}
	}
}
</script>
