<template lang="html">
<li>
  <a class="panel-tab text-center">
    <i :class="iconName" class="panel-icon"></i>
    <div>{{ tabName }}</div>
  </a>
</li>
</template>

<script>
export default {
  props:['iconName','tabName']
}
</script>

<style lang="scss" scoped>
.panel-tab{
  display: block;
  padding: 7px 12px 7px 13px;
  margin: 14px 0;
  text-align: center;
  line-height: 138%;
  white-space: nowrap;
  font-size: 12px;
}
.panel-icon{
  font-size: 22px;
}
</style>
