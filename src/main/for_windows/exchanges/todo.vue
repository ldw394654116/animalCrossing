<template>
  <main class="todo-box">
    <el-card>
      <el-calendar>
        <template slot="dateCell" slot-scope="{date, data}">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
          </p>
        </template>
      </el-calendar>
    </el-card>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.todo-box {
  display: flex;
  padding: 20px;
}
</style>