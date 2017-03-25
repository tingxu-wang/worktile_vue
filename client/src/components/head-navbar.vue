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
    secondRouterName (){
      return this.$store.state.routerLevel[1]
    },
    navbarInfo (){
      switch(this.secondRouterName){
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
      }
    }
  },
  methods:{
    isActive (itemRouterName){
      if(this.$store.state.thirdRouterName===itemRouterName){
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
  z-index: 3;

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
        font-weight: 500;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        .navbar-title{
          padding: 0 7px;
          margin-right: 11px;
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
              color: #da4f4a;
              border-bottom-color: #da4f4a;
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
