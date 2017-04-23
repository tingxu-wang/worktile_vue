<template lang="html">
  <div class="slide-content" v-show="isShow">
    <div class="entity-well-header clearfix">
      <slot name="header"></slot>
      <div class="close-container">
        <i class="glyphicon glyphicon-remove pull-right" @click="close()"></i>
      </div>
    </div>
    <div class="slider-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    close (){
      this.$emit('slideClose')
    }
  },
  props:['isShow']
}
</script>

<style lang="scss" scoped>
$hover-color:#da4f4a;
$default-color:#acaba7;
$border:solid 1px #eeece8;
.slide-content{
  border-left: solid 1px #e8edf3;
  box-shadow: 0 0 15px rgba(0,0,0,.1);
  background: #fff;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  width: 700px;
  z-index: 100;
  .entity-well-header{
    padding: 15px 20px;
    border-bottom: $border;
    position: relative;
    color: $default-color;
    .close-container{
      float:right;
      width:40px;
      padding-top: 2px;
      border-left: $border;
      i{
        cursor: pointer;
        &:hover{
          color:$hover-color;
        }
      }
    }
  }
  .slider-body{
    padding:10px 10px 0px;
  }
}
</style>
