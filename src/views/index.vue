<template>
  <div>
    <Tmp :params="params" />
  </div>
</template>

<script>
import Tmp from '@/components/tmp.vue';
export default {
  components: {
    Tmp
  },
  data() {
    return {
      params: params
    }
  }
}
</script>

<style>

</style>