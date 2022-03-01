<template>
<div class="campsites">
	<h1>Choose places to visit</h1>
	<CampingAreaList :campingAreas="campingAreas" />
	<NavContainer prevLink="Home" nextLink="Activities" />
</div>
</template>

<script>
import CampingAreaList from '../components/CampingAreaList.vue'
import NavContainer from '../components/NavContainer.vue'

export default {
	name: 'Campsites',
	computed: {
		campingAreas() {
			return this.$root.$data.campingAreas;
		}
	},
	components: {
		CampingAreaList,
		NavContainer,
	},
}
</script>
