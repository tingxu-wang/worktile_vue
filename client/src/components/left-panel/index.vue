<template lang="html">
<div class="left-panel">
  <div class="left-menu">
    <div class="left-menu-tab">
      <div class="left-menu-top">
        <div class="left-panel-tab-wrap">
          <ul class="left-panel-tab">
            <tab-item v-for="tabProp in tabProps" :icon-name="tabProp.iconName" :tab-name="tabProp.tabName"></tab-item>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import tabItem from './tab-item'

export default {
  data (){
    return {
      tabProps:[
        {iconName:'glyphicon glyphicon-user',tabName:'我的'}
      ]
    }
  },
  components:{
    tabItem
  }
}
</script>
<style lang="scss" scoped>
.left-panel{
  width:60px;
  height:100%;
  position:absolute;
  top:0;
  left:0;
}
.left-menu{
  user-select: none;
  color: #92908d;
  height: 100%;
  position: relative;

  .left-menu-tab{
    background-color: #2e2d2b;
    border-right: solid 1px #1a2224;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 60px;
    z-index: 10;
  }

  .left-menu-top{
    text-align: center;
  }

  .left-panel-tab-wrap{
    position: absolute;
    top: 56px;
    bottom: 113px;
    left: 0;
    right: 0;
  }

  .left-panel-tab{
    padding: 10px 0 0 0;
  }
}
</style>
