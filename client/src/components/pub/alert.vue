<template lang="html">
<div class="alert-container">
  <div class="alert" :class="'alert-'+type" v-show="message">
    {{ message }}
  </div>
</div>
</template>

<script>
export default {
  props:['message','type']
}
</script>

<style lang="scss" scoped>
.alert-container{
  width:100%;
  padding:10px;
  .alert{
    float: left;
    width:100%;
  }
}
</style>
