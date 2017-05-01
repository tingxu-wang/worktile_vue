<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
html,body,#app{
  height:100%;
}
#app{
  background: #F8F6F2;
}
.g-user-head{
  cursor:pointer;
  border-radius: 30px;
  background: #64b1ca;
  color:#fff;
  line-height: 40px;
  text-align: center;
}
.g-user-head-default{
  @extend .g-user-head;
  width:40px;
  height:40px;
  font-size: 14px;
}
.mt_30{
  margin-top:30px;
}
.mt_20{
  margin-top:20px;
}
.item{
  height: 70px;
  border-bottom: solid 1px #f2f1f7;
  cursor:pointer;
  .icon-container{
    display: inline-block;
    line-height: 70px;
    width: 50px;
    .icon{
      color: rgb(60, 140, 173);
      font-size: 25px;
    }
  }
  .text-container{
    display: inline-block;
    position: relative;
    top:5px;
    .description{
      color:lighten(#000,50);
      height:20px;
    }
    &:hover{
      color:#da4f4a;
    }
  }
  .delete-container{
    display: none;
    float: right;
    margin:5px 3px;
    &:hover{
      color:#da4f4a;
    }
  }
  &:hover{
    .delete-container{
      display: inline-block;
    }
  }
}
.content-main-container{
  background: #fff;
  min-height:900px;
  margin:7px 14px;
  padding:21px;
  .main-title{
    user-select: none;
    border-bottom: solid 1px #f8f6f2;
    padding: 0 15px 14px 2px;
    font-weight: 400;
    color: #777;
    font-size: 17px;
    line-height: 100%;
    display: inline-block;
  }
}
</style>
