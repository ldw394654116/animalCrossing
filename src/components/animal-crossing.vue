<template>
  <div class="css-animal-crossing">
    <main>
      <vega></vega>
    </main>
  </div>
</template>

<script>
import vega from './tools/Vega'
export default {
  components: {
    vega
  }
}
</script>

<style lang="less">
.css-animal-crossing {
  max-width: 1400px;
  margin: auto;
}
</style>