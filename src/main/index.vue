<template>
  <main>
    <h2 v-if="deviceType === 0">访问类型：{{msg}}，即将跳转...</h2>
    <for-win v-if="deviceType === 1"></for-win>
    <for-mobile v-if="deviceType === 2"></for-mobile>
  </main>
</template>

<script>
import forWin from './for_windows/index'
import forMobile from './for_mobile/index'
export default {
  components: {
    forWin, forMobile
  },

  data () {
    return {
      msg: '',
      deviceType: 0
    }
  },

  created () {
    this.deviceControl()
  },

  methods: {
    deviceControl () {
      const userAgentInfo = navigator.userAgent;      
      if (userAgentInfo.indexOf('iPhone') !== -1 || userAgentInfo.indexOf('Android') !== -1) {
        this.msg = '移动端'
        setTimeout(() => {
          this.deviceType = 2
        }, 1000);
      } else {
        this.msg = 'PC端'
        setTimeout(() => {
          this.deviceType = 1
        }, 1000);
      }      
    }
  }
}
</script>

<style>

</style>