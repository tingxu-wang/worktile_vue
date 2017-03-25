<template lang="html">
<li>
  <span class="panel-tab text-center" :class="{panelTabActive:isActive}" @click="changeRouterPath()">
    <i :class="iconName" class="glyphicon panel-icon"></i>
    <div>{{ tabName }}</div>
  </span>
</li>
</template>

<script>
export default {
  computed:{
    isActive (){
      if(this.$store.state.secondRouterName===this.routerName){
        return true
      }
      return false
    }
  },
  methods:{
    changeRouterPath (){
      this.$router.push({name:this.routerName})
    }
  },
  props:['iconName','tabName','index','routerName']
}
</script>

<style lang="scss" scoped>
$tabColor:#fff;

.panel-tab{
  display: block;
  padding: 7px 12px 7px 13px;
  margin: 14px 0;
  text-align: center;
  line-height: 138%;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s linear;

  &:hover{
    color:$tabColor;
  }
}
.panelTabActive{
  color:$tabColor;
  border-left: solid 3px #da4f4a;
}
.panel-icon{
  font-size: 22px;
}
</style>
