<template>
<div id="app">
	<div class="page">
		<router-view />
	</div>
	<footer>
		<a href="https://github.com/joshuasrichardson/camp-planning">Github Repository</a>
	</footer>
</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	min-height: 100%;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

img {
	object-fit: cover;
	border: solid 1px #2c3e50;
	margin-bottom: 15px;
}

h1,
h2 {
	padding: 10px;
	margin: 10px;
	box-sizing: border-box;
}

body {
	background-color: #D3B88C;
	min-height: 100vh;
}

.isSelected {
	color: #9EBC9F;
	background-color: #2c3e50;
}

.changeOnHover:hover {
	background-color: #656256;
}

.notSelected {
	background-color: #9EBC9F;
}

.page {
	min-height: calc(100vh - 50px);
}

footer {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
	background-color: #9EBC9F;
}
</style>
