<template lang="html">
  <div class="mod-navbar">
    <div class="main">
      <div class="title">
        <h3>
          <i class="glyphicon navbar-title" :class="navbarInfo.iconName"></i>
          {{ navbarInfo.title }}
        </h3>
      </div>
      <div class="center-menu">
        <ul>
          <li v-for="menuItem in navbarInfo.menuItems">
            <router-link :class="{active:isActive(menuItem.routerName)}" :to="menuItem.routerName">{{ menuItem.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    navbarInfo (){
      switch(this.$store.state.secondRouterName){
        case 'dashboard':
          return {
            iconName:'glyphicon-dashboard',
            title:'我的工作台',
            menuItems:[
              {name:'任务',routerName:'mission'},
              {name:'动态',routerName:'moments'}
            ]
          }
          break;
        case 'search':
          return {
            iconName:'glyphicon-search',
            title:'搜索',
            menuItems:[
            ]
          }
          break;
        case 'messages':
          return {
            iconName:'glyphicon-envelope',
            title:'消息中心',
            menuItems:[
              {name:'未读',routerName:'unread'},
              {name:'待处理',routerName:'pending'},
              {name:'已读',routerName:'readed'}
            ]
          }
          break;
        case 'projectReview':
          return {
            iconName:'glyphicon-folder-open',
            title:'项目一览',
            menuItems:[
              {name:'任务',routerName:'mission'},
              {name:'文档',routerName:'document'},
              {name:'话题',routerName:'topic'}
            ]
          }
          break;
        case 'group':
          const groupId=this.$route.params.groupId,
            groupName=this.$route.params.groupName
          return {
            iconName:'glyphicon-th-large',
            title:groupName,
            menuItems:[
            ]
          }
          break;
        case 'project':
          return {
            iconName:'glyphicon-folder-open',
            title:this.$route.params.projectName,
            menuItems:[
              {name:'文档',routerName:'document'}
            ]
          }
          break;
      }
    }
  },
  methods:{
    isActive (itemRouterName){
      let routerLevel=this.$store.state.routerLevel
      if(routerLevel[routerLevel.length-1]===itemRouterName){
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.mod-navbar{
  user-select: none;
  padding: 0 7px;
  position: relative;
  background-color: #fff;
  border-bottom: solid 1px #eeece8;
  min-height: 55px;
  // z-index: 3;

  .main{
    line-height: 55px;
    min-height: 55px;

    .title{
      float: left;
      white-space: nowrap;
      line-height: 100%;
      max-width: 22%;

      h3{
        min-width: 100px;
        margin: 0;
        vertical-align: middle;
        line-height: 54px;
        font-size: 21px;
        display: inline-block;
        color: #333;
        margin-right: 7px;
        font-weight: 400;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        .navbar-title{
          padding: 0 7px;
          width: 44px;
          display: inline-block;
          text-align: center;
          color: #acaba7;
          line-height: 30px;
          font-size: 25px;
          text-shadow: 0 2px 0 #fff, 0 -2px 0 #f2f2ea;
        }
      }
    }

    .center-menu{
      line-height: 55px;
      min-height: 55px;
      margin-left: 28%;
      margin-right: 28%;
      width: 43%;
      padding-left: 14px;
      white-space: nowrap;
      text-align: center;

      ul{
        margin: 0;

        li{
          position: relative;
          display: inline-block;
          margin: 0 5px 0 6px;
          padding: 0;

          a{
            display: block;
            font-size: 16px;
            line-height: 26px;
            padding: 14px 8px 14px 8px;
            border-bottom: solid 2px transparent;
            color: #777;
            text-decoration: none;

            &.active{
              $activeColor:#da4f4a;

              color: $activeColor;
              border-bottom-color: #da4f4a;

              &:hover{
                color: $activeColor;
              }
            }
            &:hover{
              color: #484744;
            }
          }
        }
      }
    }
  }
}

</style>
