<template>
  <div class="show-area">
    展示区
    <A />
  </div>
</template>

<script>
import A from './abc.vue'
export default {
  components: {
    A
  },
  data() {
    return {
      itemClicked: false,
      innerItemClicked: false
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
.show-area {
  flex: 1;
}
</style>