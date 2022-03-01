<template lang="html">
  <div class="nav-container">

    <div class="nav-button" v-if="prevLink !== 'none'">
      <router-link :to="{ name: `${prevLink}`}">
        &#8592; {{prevLink}}
      </router-link>
    </div>

    <div class="nav-button" v-if="nextLink !== 'none'">
      <router-link :to="{ name: `${nextLink}`}">
        {{nextLink}} &#8594;
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
	name: 'NavContainer',
	props: {
		prevLink: String,
		nextLink: String,
	},
}
</script>

<style lang="css" scoped>
.nav-container {
  display: flex;
  justify-content: center;
}

.nav-button {
  margin: 10px;
  padding: 10px;
  border: solid 1px #2c3e50;
  background-color: #9EBC9F;
  width: 130px;
}

a {
  text-decoration: none;
}

a:visited, a:active, a:default {
  color: #2c3e50;
}

a:hover, .nav-button:hover {
  background-color: #656256;
  color: #D3B88C;
}

</style>
