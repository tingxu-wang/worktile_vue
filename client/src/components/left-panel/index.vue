<template lang="html">
  <div class="left-panel">
    <div class="left-menu">
      <div class="left-menu-tab">
        <div class="left-menu-top">
          <div class="left-panel-tab-wrap">
            <ul class="left-panel-tab">
              <tab-item v-for="(tabProp,index) in tabProps" :icon-name="tabProp.iconName" :tab-name="tabProp.tabName" :is-active="tabProp.isActive" :router-name="tabProp.routerName" :index="index"></tab-item>
            </ul>
          </div>
        </div>
        <div class="left-panel-footer">
          <div class="quick-add" @click="quickAdd">
            <i class="glyphicon glyphicon-plus"></i>
          </div>
          <div class="user-setting" @click="openUserSetting">
            庭旭
          </div>
          <user-setting :user-box-is-show="userBoxIsShow"></user-setting>
        </div>
        <pop-box :pop-box-is-show="popBoxIsShow" :user-setting-is-show="userBoxIsShow"></pop-box>
      </div>
    </div>
  </div>
</template>

<script>
  import tabItem from './tab-item'
  import popBox from './pop-box'
  import userSetting from './user-setting'

  export default {
    data (){
      return {
        tabProps:[
          {iconName:'glyphicon-dashboard',tabName:'我的',routerName:'mission'},
          {iconName:'glyphicon-search',tabName:'搜索',routerName:'search'},
          {iconName:'glyphicon-envelope',tabName:'消息',routerName:'messages'},
          {iconName:'glyphicon-folder-open',tabName:'项目',routerName:'project'},
        ],
        popBoxIsShow:false,
        userBoxIsShow:false
      }
    },
    methods:{
      togglePopBoxActive (){
        this.popBoxIsShow=!this.popBoxIsShow
      },
      toggleUserBoxActive (){
        this.userBoxIsShow=!this.userBoxIsShow
      },
      quickAdd (){
        if(this.userBoxIsShow){
          this.toggleUserBoxActive()
        }
        this.togglePopBoxActive()
      },
      openUserSetting (){
        if(this.popBoxIsShow){//弹窗打开时关闭
          this.togglePopBoxActive()
        }
        this.toggleUserBoxActive()
      }
    },
    components:{
      tabItem,
      popBox,
      userSetting
    }
  }
</script>
<style lang="scss">
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

$boxBgColor:#fff;
.popbox{
  position:absolute;
  display: block;
  left: 61px;
  min-width: 252px;
  max-width:400px;
  text-align: left;
  background-color: $boxBgColor;
  border: 1px solid #eeece8;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
  color:#484744;
}
.popbox-menu{
  padding: 5px;
  margin-bottom: 0px;
}
.popbox-li{
  list-style: none;
  padding:8px 30px;
  cursor: pointer;
  border-radius: 5px;

  &:hover{
    background: #f1ede5;
  }
}
.divider{
  border: 0;
  border-top: solid 1px #e8edf3;
  margin: 0;
  padding: 0;
  cursor: default;
  height: 1px;

  &:hover{
    background: $boxBgColor;
  }
}
</style>
