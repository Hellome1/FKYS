<template>
  <div class="edit">
    <Tool />
    <ShowArea />
  </div>
</template>

<script>
import Tool from '@/components/tool/index.vue'
import ShowArea from '@/components/showArea/index.vue'
export default {
  components: {
    Tool,
    ShowArea
  }
}
</script>

<style lang="scss">
.edit {
  display: flex;
}
</style>