<template lang="html">
  <div class="">
    <panel></panel>
    <router-view></router-view>
  </div>
</template>

<script>
import panel from './left-panel/index.vue'

export default {
  components:{panel}
}
</script>

<style lang="css">
</style>
