<template>
  <div class="tool-bar-con">
    <div class="tool-bar-head">
      <h3>工具栏</h3>
    </div>
    <Detail />
  </div>
</template>

<script>
import Detail from './detail.vue';
export default {
  components: {
    Detail
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss">
.tool-bar-con {
  height: 100vh;
  width: 15vw;
  border-right: 1px solid rgba(0, 0, 0, 0.05);

  .tool-bar-head {
    text-align: center;
  }
}
</style>