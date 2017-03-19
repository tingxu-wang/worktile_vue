<template lang="html">
<div class="left-panel">
  <div class="left-menu">
    <div class="left-menu-tab">
      <div class="left-menu-top">
        <div class="left-panel-tab-wrap">
          <ul class="left-panel-tab">
            <tab-item v-for="(tabProp,index) in tabProps" :icon-name="tabProp.iconName" :tab-name="tabProp.tabName" :is-active="tabProp.isActive" :router-name="tabProp.routerName" :index="index" v-on:has-clicked="changeTabActive"></tab-item>
          </ul>
        </div>
      </div>
      <div class="left-panel-footer">
        <div class="quick-add">
          <i class="glyphicon glyphicon-plus"></i>
        </div>
        <div class="user-setting">
          庭旭
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
        {iconName:'glyphicon glyphicon-user',tabName:'我的',isActive:true,routerName:'dashboard'},
        {iconName:'glyphicon glyphicon-search',tabName:'搜索',isActive:false,routerName:'search'},
        {iconName:'glyphicon glyphicon-envelope',tabName:'消息',isActive:false,routerName:'messages'},
        {iconName:'glyphicon glyphicon-folder-open',tabName:'项目',isActive:false,routerName:null},
      ]
    }
  },
  methods:{
    changeTabActive (tabIndex){//点击tab时更换样式
      this.tabProps.map((item,index)=>{
        if(index===tabIndex){
          item.isActive=true
        }else{
          item.isActive=false
        }
      })
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
  .left-panel-footer{
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: center;
  }
  .quick-add{
    width:60px;
    height:30px;
    display: block;
    padding: 6px;
    text-align: center;
    color: #92908d;
    background-color: #2e2d2b;
    border-left: solid 3px transparent;
    cursor:pointer;
    margin-bottom: 15px;

    &:hover{
      color:#fff;
    }
  }
  .user-setting-container{

  }
  .user-setting{
    width:40px;
    height:40px;
    cursor:pointer;
    border-radius: 30px;
    background: #64b1ca;
    color:#fff;
    font-size: 14px;
    line-height: 40px;
    margin:0 auto 15px;
  }
}
</style>
