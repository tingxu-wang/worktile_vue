<template lang="html">
  <div class="">
    <Slider v-model="value" range></Slider>
  </div>
</template>

<script>
export default {
  data (){
    return {
      value:[20,50]
    }
  }
}
</script>

<style lang="css">
</style>
