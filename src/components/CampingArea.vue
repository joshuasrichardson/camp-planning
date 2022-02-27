<template>
<div class="campingArea" v-bind:class="[selected ? 'isSelected' : 'notSelected', {changeOnHover: hover}]">
	<h1>{{area.name}}</h1>
	<img :alt="area.name" :src="require(`../assets/${area.image}`)">
</div>
</template>

<script>
export default {
	name: 'CampingArea',
	props: {
		area: Object,
		hover: Boolean,
	},
	computed: {
		selected() {
			return this.$root.$data.areasToVisit.includes(this.area);
		}
	}
}
</script>

<style scoped>
img {
	width: 200px;
}
</style>
