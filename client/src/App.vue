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
  margin:0 auto 15px;
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
</style>
