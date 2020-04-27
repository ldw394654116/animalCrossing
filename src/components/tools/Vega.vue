<template>  
  <el-card>
    <el-calendar>    
      <template slot="dateCell" slot-scope="{date, data}">
        <div>{{ data.day.split('-').slice(1).join('-') }}</div>
        <div class="vega-price">
          <el-button @click="showDialog" v-if="btnControl(date)" icon="el-icon-edit" size="mini"></el-button>
        </div>
        <div class="vega-price" v-if="getVegaPrice(date).length">{{getVegaPrice(date).join(' & ')}}</div>
      </template>
    </el-calendar>
    <el-dialog
      title="填写菜价"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div>
        <el-input-number v-model="price" :min="1" :max="1000" :step="100" label="请输入菜价"></el-input-number>
      </div>
      <div style="margin-top: 10px;">
        <el-radio-group v-model="area">
          <el-radio :label="1">上午</el-radio>
          <el-radio :label="2">下午</el-radio>        
        </el-radio-group>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: 'vega',
  data () {
    return {
      vegaList: [],
      dialogVisible: false,
      price: 100,
      area: 1  // 1:上午 2:下午
    }
  },
  created () {
    this.initTable()
  },
  computed: {
    
  },
  methods: {
    async initTable () {
      const res = await this.axios.get('/vega')
      res.data.forEach(e => {
        e.formatDate = this.timeFormat(e.date)
      })
      this.vegaList = res.data
    },
    timeFormat (time) {
      const timeObj = new Date(time)
      const year = timeObj.getFullYear()
      const month = timeObj.getMonth() + 1 > 9 ? timeObj.getMonth() + 1 : '0' + (timeObj.getMonth() + 1)
      const day = timeObj.getDate()
      return year + '-' + month + '-' + day
    },
    getVegaPrice (time) {      
      const price = this.vegaList.filter(v => v.formatDate === this.timeFormat(time))
      if (price.length) {
        let arr = []        
        for(let i of price){
          if (i.area === 1) {
            arr.push('AM:' + i.value)
          } else {
            arr.push("PM:" + i.value)
          }
        }
        return arr
      } else {
        return []
      }
    },
    btnControl(date) {
      const key1 = new Date().getMonth() === new Date(date).getMonth() && new Date().getDate() === new Date(date).getDate()
      const key2 = this.getVegaPrice(date).length < 2
      return key1 && key2
    },
    showDialog () {
      this.dialogVisible = true
    },
    handleClose () {
      this.dialogVisible = false
      this.price = 100
    },
    async submit () {
      await this.axios.post('/vega', { value: this.price, area: this.area })      
      this.handleClose()
      this.initTable()      
    }
  }
}
</script>

<style lang="less">
.vega-price {
  margin-top: 10px;
}
.el-calendar-table .el-calendar-day {
  height: 105px;
}
</style>