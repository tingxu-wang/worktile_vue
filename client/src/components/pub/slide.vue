<template lang="html">
  <div class="slide-content">
    <div class="entity-well-header clearfix">
      <div class="entity-project-name">
        project-name
      </div>
      <ul class="entity-well-header-nav">
        <li>x</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
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
    padding: 7px 0 7px 20px;
    border-bottom: solid 1px #eeece8;
    position: relative;
    .entity-project-name{
      color: #acaba7;
      font-size: 15px;
      line-height: 280%;
      position: absolute;
      right: 450px;
      left: 23px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      cursor:pointer;
      &:hover{
        color:#da4f4a;
      }
    }
    .entity-well-header-nav{
      float: right;
      margin-left: 0;
      font-size: 14px;
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
      li {
        float:left;
      }
    }
  }
}
</style>
