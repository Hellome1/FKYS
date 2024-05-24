<template>
  <div>
    <div class="input-group">
      <el-input
        placeholder="请输入内容"
        v-model="wI"
        clearable>
        <template slot="prepend">宽度</template>
        <template slot="append">px</template>
      </el-input>
      <el-input
        placeholder="请输入内容"
        v-model="hI"
        clearable>
        <template slot="prepend">高度</template>
        <template slot="append">px</template>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wI: '',
      hI: ''
    }
  }
}
</script>

<style lang="scss">
.input-group {
  > div {
    margin-top: 10px;
  }
}
</style>