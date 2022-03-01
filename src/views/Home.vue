<template>
<div class="home">
	<img id="main-pic" alt="Camping" src="../assets/tree-river.jpg">
	<h1>Start planning your campout</h1>
	<NavContainer prevLink='none' nextLink='Campsites' />
</div>
</template>

<script>
import NavContainer from '../components/NavContainer.vue'

export default {
	name: 'Home',
	components: {
		NavContainer,
	},
}
</script>

<style scoped>
#main-pic {
	width: 100%;
	max-width: 100%;
	max-height: 50vh;
	height: 50vh;
}
</style>
