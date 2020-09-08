<template>
  <el-card>
    <el-row>
      <el-col v-for="(o, index) in 24" :key="o" :span="2" :offset="3">
        <div>
          <span>100</span>
          <svg-icon icon-class="userDevice" class-name="icon" />
        </div>

      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.icon {
  width: 150px;
  height: 100px;
}
</style>
