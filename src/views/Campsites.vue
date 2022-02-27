<template>
<div class="campsites">
	<h1>Choose places to visit</h1>
	<CampingAreaList :campingAreas="campingAreas" />
	<router-link :to="{ name: 'Activities'}">
		<div class="next">
			Next
		</div>
	</router-link>
</div>
</template>

<script>
import CampingAreaList from '../components/CampingAreaList.vue'

export default {
	name: 'Campsites',
	computed: {
		campingAreas() {
			return this.$root.$data.campingAreas;
		}
	},
	components: {
		CampingAreaList,
	},
}
</script>
