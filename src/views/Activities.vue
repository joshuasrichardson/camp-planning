<template>
<div class="activities">
	<div class="" v-for="area in areas" :key="area.id">
		<CampingArea :area="area" />
		<h2>Select the activities you would like to do at {{area.name}}.</h2>
		<ActivityList :activities="area.activities" />
	</div>
	<NavContainer prevLink="Campsites" nextLink="Preparation" />
</div>
</template>

<script>
import CampingArea from '../components/CampingArea.vue'
import ActivityList from '../components/ActivityList.vue'
import NavContainer from '../components/NavContainer.vue'

export default {
	name: 'Activities',
	props: {
		area: Object,
	},
	components: {
		CampingArea,
		ActivityList,
		NavContainer,
	},
	computed: {
		areas() {
			return this.$root.$data.areasToVisit;
		},
	}
}
</script>
