<template>
<div class="packingList">
	<h1>Packing List</h1>
	<ul>
		<li v-for="item in itemsToBring" :key="item.name">
			<input type="checkbox" v-model="item.have" />
			<label v-bind:class="{ completed: item.have }">{{ item.name }}</label>
			<button v-on:click="deleteItem(item)" class="delete">X</button>
		</li>
	</ul>
	<form v-on:submit.prevent="addItem">
		<input type="text" v-model="itemToAdd">
		<button type="submit">Add</button>
	</form>
</div>
</template>

<script>
export default {
	name: 'PackingList',
	props: {
		items: Array,
	},
	data() {
		return {
			itemToAdd: '',
		};
	},
	methods: {
		addItem() {
			this.items.push({
				name: this.itemToAdd,
				have: false,
				show: true
			});
			this.itemToAdd = '';
		},
		deleteItem(item) {
			item.show = false;
		}
	},
	computed: {
		itemsToBring() {
			return this.items.filter(item => {
				if (item.show) {
					return item;
				}
			});
		},
	},
}
</script>

<style scoped>
.packingList {
	display: flex;
	align-items: center;
	flex-direction: column;
}

ul {
	list-style: none;
}

li {
	background: #AAAAAA;
	width: 400px;
	min-height: 30px;
	padding: 10px;
	margin-bottom: 10px;
	font-size: 1em;
	display: flex;
	align-items: center;
}

.delete {
	display: none;
	margin-left: auto;
}

li:hover .delete {
	display: block;
}

label {
	width: 300px;
	text-align: left;
	margin-left: 40px;
}

.completed {
	text-decoration: line-through;
}

input[type=checkbox] {
	transform: scale(1.5);
	margin-right: 10px;
}

input[type=text] {
	font-size: 1em;
}

button {
	font-family: 'Arvo';
	font-size: 1em;
}
</style>
