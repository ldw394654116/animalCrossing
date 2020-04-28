<template>
  <div class="css-animal-crossing">
    <main v-if="bl">
      <vega></vega>
    </main>
  </div>
</template>

<script>
import vega from './tools/Vega'
export default {
  data () {
    return {
      bl: true
    }
  },
  components: {
    vega
  }
}
</script>

<style lang="less">
.css-animal-crossing {
  width: 100%;
  max-width: 1400px;  
}
</style>