<template>
<div class="campingAreaList">
	<div v-for="area in campingAreas" :key="area.id" @click="selectArea(area)">
		<CampingArea :area="area" :hover="true" />
	</div>
</div>
</template>

<script>
import CampingArea from './CampingArea.vue'

export default {
	name: 'CampingAreaList',
	props: {
		campingAreas: Array,
	},
	methods: {
		selectArea(area) {
			const index = this.$root.$data.areasToVisit.indexOf(area);
			if (index > -1) {
				this.$root.$data.areasToVisit.splice(index, 1);
			} else {
				this.$root.$data.areasToVisit.push(area);
			}
		},
	},
	components: {
		CampingArea,
	}
}
</script>

<style scoped>
.campingAreaList {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

.campingArea {
	width: 300px;
	height: 300px;
	margin: 0px 15px 25px 15px;
	border: solid 1px #2c3e50;
}
</style>
