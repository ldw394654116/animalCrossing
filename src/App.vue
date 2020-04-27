<template>
  <div id="app"><ac></ac></div>
</template>

<script>
import ac from './components/animal-crossing'
export default {
  name: 'App',
  components: { ac }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
