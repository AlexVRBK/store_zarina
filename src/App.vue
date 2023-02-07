<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
  import vMainWrapper from './components/v-main-wrapper'

export default {
  components: {
			vMainWrapper
		},
}
</script>

<style lang="scss">
#app {
  background: rgb(207, 205, 205);
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
  color: #2c3e50;
}


</style>
