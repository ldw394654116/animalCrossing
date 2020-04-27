<template>
  <div>
    <div :style="{width: baseWH + 'px', height: baseWH + 'px', zIndex: 100, left: -baseWH / 2 + 'px', bottom: -baseWH / 2 + 'px'}" :class="['css-nav', isOpen ? 'open':'close']" @click="jojo">
      <div :style="{width: iconWH + 'px', height: iconWH + 'px'}" :class="['nav-inner', isOpen ? 'iRotate':'iBack']">
        <i :class="isOpen ? 'el-icon-s-help':'el-icon-help'"></i>
      </div>
    </div>
    
    <div v-for="(item, idx) in jojoList" :key="idx" :style="{width: (idx + 2) * baseWH + 'px', height: (idx + 2) * baseWH + 'px', backgroundColor: isOpen ? item.bgcolor : '#ffffff', zIndex: 99 - idx, left: -(idx + 2) * baseWH / 2 + 'px', bottom: -(idx + 2) * baseWH / 2 + 'px'}" :class="['css-nav', isOpen ? 'open':'close']" @click="jojo">
      <div :key="jdx" v-for="(j,jdx) in (idx + 2)" :style="{justifyContent: 'flex-end', alignItems: 'flex-end', left: -(idx + 1 - jdx) * baseWH / 2 + 'px', bottom: -jdx * baseWH / 2 + 'px', width: (idx + 2) * iconWH + 'px', height: (idx + 2) * iconWH + 'px'}" :class="['nav-inner', isOpen ? 'iRotate':'iBack']">
        <i v-show="isOpen" :style="jdx !== 0 && jdx !== (idx + 1) ? odd(jdx, idx+2):''" :class="['baseIcon', isOpen ? 'el-icon-s-help':'el-icon-help']"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isOpen: false,
      baseWH: 200,
      jojoList: [
        {
          label: '1',
          icon: '1',
          bgcolor: 'red',
          key: 'a'
        },
        {
          label: '2',
          icon: '2',
          bgcolor: 'yellow',
          key: 'b'
        },
        {
          label: '3',
          icon: '3',
          bgcolor: 'gray',
          key: 'c'
        },
        {
          label: '3',
          icon: '3',
          bgcolor: 'gray',
          key: 'c'
        },
        {
          label: '3',
          icon: '3',
          bgcolor: 'gray',
          key: 'c'
        }
      ]
    }
  },
  computed: {
    iconWH: function () {
      return this.baseWH / 2
    },
    jojoListComputed: function () {
      return this.isOpen ? this.jojoList : []
    }    
  },
  methods: {
    jojo () {
      this.isOpen = !this.isOpen      
    },
    odd (jdx, idx) {
      // console.log(jdx, idx)
      const key = (idx - 1) / 2 === jdx ? 0.35 - (jdx - 1) * 0.2:0.25
      // const key = (idx - 1) / 2 === jdx ? 0.35:0.25
      return {
        position: 'absolute',
        top:  (idx / 2 - key) * this.baseWH + 'px',
        left:  (idx / 2 - key) * this.baseWH + 'px'
      }
    }
  }
}
</script>
<style lang="less">
  .css-nav {
    position: fixed;
    border-radius: 50%;    
    .nav-inner {
      position: fixed;
      left: 0;
      bottom: 0;   
      font-size: 40px;
      display: flex;
      justify-content: center;
      align-items: center;      
    }
  }
  .open {
    background-color: #ffffff;
    border: 3px solid #409EFF;    
    transition: all .7s;
  }
  .close {
    background-color: #409EFF;
    border: 1px solid #ffffff;    
    transition: all .7s;
  }
  .iRotate {
    transform: rotate(270deg);
    transition: all .7s;
  }
  .iBack {
    transform: rotate(0deg);
    transition: all .7s;
  }
  .baseIcon {
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
</style>