<template lang="html">
  <div class="main">
    <panel></panel>
    <div class="center-panel">
      <headNavbar></headNavbar>
      <div class="center-panel-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import panel from './left-panel/left-panel.vue'
import headNavbar from './head-navbar.vue'

export default {
  data (){
    return {

    }
  },
  components:{
    panel,
    headNavbar
  }
}
</script>

<style lang="scss" scoped>
.main{
  height:100%;
}
.layout_content{
  position: relative;
  height:100%;
}
.center-panel{
  height: 100%;
  margin-right: 0;
  margin-left: 60px;
  position: relative;
}
.center-panel-content{
  padding-top: 7px;
}
</style>
