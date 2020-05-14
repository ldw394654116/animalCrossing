<template>
  <div id="nav" v-show="showNav" class="nav-box" :style="autoPosition">
    <div v-for="(item, idx) in iconArr" :key="idx" class="icon" :title="item.title" @click="emitFunc(item.funcName)">
      <i :class="item.icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconArr: [
        {
          title: '购物记录',
          icon: 'el-icon-shopping-cart-full',
          funcName: 'shopping'
        },
        {
          title: '饮食记录',
          icon: 'el-icon-food',
          funcName: 'food'
        },
        {
          title: '健身记录',
          icon: 'el-icon-bicycle',
          funcName: 'sports'
        },
        {
          title: '备忘',
          icon: 'el-icon-edit-outline',
          funcName: 'todo'
        }
      ],
      autoPosition: {
        top: 0,
        left: 0,
        opacity: 1
      },
      showNav: false,
      loop: false
    }
  },

  mounted () {
    this.loadMouseLeave()
  },

  methods: {
    loadMouseLeave () {
      const nav = document.getElementById('nav')
      nav.addEventListener('mouseleave', this.hide)
    },

    show(x, y) {
      const maxLen = document.documentElement
      const endX = maxLen.offsetWidth - x <= 106 ? maxLen.offsetWidth - 212 : x - 75
      const endY = maxLen.offsetHeight - y <= 106 ? maxLen.offsetHeight - 212 : y - 75
      this.autoPosition = {
        left: endX + 'px',
        top: endY + 'px'
      }
      this.showNav = true
    },

    hide () {
      this.showNav = false
    },

    emitFunc (funcName) {
      this.$emit('exchanges', funcName)
      this.hide()
    }
  }
}
</script>

<style lang="less" scoped>
.nav-box {
  z-index: 10;
  position: absolute;
  width: 150px;
  height: 150px;
  padding: 10px;
  border: 1px solid black;
  background-color: #9dc39c;
  display: flex;
  flex-wrap: wrap;
  border-radius: 50%;
  transform: rotate(45deg);
  .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transform: rotate(-45deg);
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 35px;
    }
  }
  .icon:hover {
    background-color: #409EFF;
    i {
      background-color: #409EFF;
      color: #966DD1;
    }
  }
  // .icon:nth-of-type(odd) {
  //   margin-right: 4px;
  // }
  // .icon:nth-of-type(even) {
  //   margin-left: 4px;
  // }
}
</style>