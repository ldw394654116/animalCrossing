<template>
  <main id="main" class="window-box">
    <component :is="funcName"></component>
    <navs ref="navs" @exchanges="exchanges"></navs>
  </main>
</template>

<script>
import navs from './nav'
import food from './exchanges/food'
import sports from './exchanges/sports'
import shopping from './exchanges/shopping'
import todo from './exchanges/todo'
export default {
  components: {
    navs, food, sports, shopping, todo
  },

  data () {
    return {
      funcName: ''
    }
  },

  mounted () {
    this.funcName = sessionStorage.getItem('funcName') || 'sports'
    this.navsFun()
  },

  methods: {
    navsFun () {
      const mainDom = document.getElementById('main')
      mainDom.oncontextmenu = e => e.preventDefault()
      mainDom.addEventListener('mousedown', e => {
        if (e.button === 2) {
          this.$refs.navs.show(e.clientX, e.clientY)
        }
      })
    },

    exchanges (funcName) {
      sessionStorage.setItem('funcName', funcName)
      this.funcName = funcName
    }
  }
}
</script>

<style lang="less" scoped>
.window-box {
  height: 100vh;
  position: relative;
  .sss {
    height: 400px;
    border: 1px solid black;
  }
}
</style>