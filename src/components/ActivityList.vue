<template>
<div class="activityList">
	<div class="activity" v-for="activity in activities" :key="activity.id" @click="selectActivity(activity)">
		<div class="changeOnHover" :class="selected(activity) ? 'isSelected' : 'notSelected'">
			<h2>{{activity.name}}</h2>
			<img :alt="activity.name" :src="require(`../assets/${activity.image}`)">
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'ActivityList',
	methods: {
		selectActivity(activity) {
			const index = this.$root.$data.activitiesToDo.indexOf(activity);
			if (index > -1) {
				let deletedActivity = this.$root.$data.activitiesToDo.splice(index, 1)[0];
				let itemArrays = this.$root.$data.activitiesToDo.map(activity => activity.items);
				let keepItems = [];
				for (let itemArray of itemArrays) {
					for (let item of itemArray) {
						keepItems.push(item);
					}
				}

				for (let item of this.$root.$data.defaultItems) {
					keepItems.push(item);
				}
				for (let item of deletedActivity.items) {
					if (!keepItems.map(item => item.name).includes(item.name)) {
						let index2 = this.$root.$data.itemsToBring.indexOf(item);
						this.$root.$data.itemsToBring.splice(index2, 1);
					}
				}
			} else {
				this.$root.$data.activitiesToDo.push(activity);
				for (let item of activity.items) {
					if (!this.$root.$data.itemsToBring.map(item => item.name).includes(item.name)) {
						this.$root.$data.itemsToBring.push(item);
					}
				}
			}
		},
		selected(activity) {
			return this.$root.$data.activitiesToDo.includes(activity);
		}
	},
	props: {
		activities: Array,
	},
}
</script>

<style scoped>
img {
	width: 200px;
}

.activityList {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
}

.activity {
	width: 250px;
	margin: 10px;
}
</style>
