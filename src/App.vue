<template>
  <div id="app">
    <ac></ac>
    <navs></navs>
  </div>
</template>

<script>
import ac from './components/animal-crossing'
import navs from './components/tools/nav'
export default {
  name: 'App',
  components: { ac, navs }
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
