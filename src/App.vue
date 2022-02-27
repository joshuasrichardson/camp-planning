<template>
<div id="app">
	<div id="nav">
		<router-link to="/">Home</router-link> >
		<router-link to="/campsites">Campsites</router-link> >
		<router-link to="/activities">Activities</router-link> >
		<router-link to="/preparation">Preparation</router-link>
	</div>
	<router-view />
	<footer>
		<p>
			<a href="#">Github Repository</a>
		</p>
	</footer>
</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
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
}

body {
	background-color: #D3B88C;
}

.isSelected {
	/* color: #F4F2F3; */
	color: #9EBC9F;
	background-color: #2c3e50;
}

.changeOnHover:hover {
	background-color: #656256;
}

.notSelected {
	background-color: #9EBC9F;
}
</style>
