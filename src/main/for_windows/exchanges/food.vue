<template>
  <main class="food-box" v-if="list.length">
    <div v-for="(item, idx) in list" :key="idx" @click="go(item.url)">
      <el-card>
        <div>{{item.title + '-' + item.replies}}</div>
      </el-card>
    </div>
  </main>
  <main v-else>
    <h1>Loading...</h1>
  </main>
</template>

<script>
export default {
  created () {
    this.loop = setInterval(() => {
      this.init()
    }, 35000)
  },
  data () {
    return {
      loop: '',
      list: []
    }
  },
  destroyed () {
    clearInterval(this.loop)
  },
  methods: {
    async init () {
      const res = await this.axios.get('/hupu')
      this.list = res.data
      this.$notify({
        title: '提示',
        message: '虎扑热帖数据已刷新',
        position: 'bottom-right',
        duration: 2500
      });
    },

    go (url) {
      window.open(url)
    }
  }
}
</script>

<style lang="less" scoped>
.food-box {
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  .el-card {
    margin: 5px;
    width: 255px;
    height: 100px;
  }
}
</style>