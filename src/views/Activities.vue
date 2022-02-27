<template>
<div class="activities">
	<div class="" v-for="area in areas" :key="area.id">
		<CampingArea :area="area" />
		<h2>Select the activities you would like to do at {{area.name}}.</h2>
		<ActivityList :activities="area.activities" />
	</div>
	<router-link :to="{ name: 'Preparation'}">
		<div class="next">
			Next
		</div>
	</router-link>
</div>
</template>

<script>
import CampingArea from '../components/CampingArea.vue'
import ActivityList from '../components/ActivityList.vue'

export default {
	name: 'Activities',
	props: {
		area: Object,
	},
	components: {
		CampingArea,
		ActivityList,
	},
	computed: {
		areas() {
			return this.$root.$data.areasToVisit;
		},
	}
}
</script>
