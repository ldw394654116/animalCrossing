<template>
  <div id="app"><idx></idx></div>
</template>

<script>
import idx from './main/index'
export default {
  name: 'App',
  components: { idx }
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
* {
  box-sizing: border-box;
}
</style>
