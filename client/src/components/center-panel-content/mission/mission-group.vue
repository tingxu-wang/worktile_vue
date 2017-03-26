<template lang="html">
  <div>
    <div class="mission-group-item">
      <div class="mission-group-header clearfix">
        <div class="mission-group-title-container pull-left">
          <div class="mission-group-title">
            收件箱
          </div>
        </div>
        <div class="item-num-container pull-right">
          <div class="item-num">1</div>
        </div>
      </div>
      <div class="task-main-container">
        <div class="task-container">
          <task-item></task-item>
        </div>
      </div>
      <div class="task-footer-container">
        <div class="task-footer">
          <i class="glyphicon glyphicon-plus-sign"></i>
          新建任务
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import taskItem from './task-item.vue'

export default {
  components:{taskItem}
}
</script>

<style lang="scss" scoped>
.mission-group-item{
  position: relative;
  min-height: 60px;
  width: 279px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: top;
  display: inline-block;
  zoom: 1;
  min-width: 180px;
  margin: 7px 0 0 10px;
  padding-bottom: 6px;
  border-radius: 5px;
  background-color: #eeece8;

  .mission-group-header{
    cursor: default;
    z-index: 2;
    position: relative;

    .mission-group-title-container{
      margin-right: 50px;

      .mission-group-title{
        font-size: 16px;
        margin: 0;
        color: #6f6e6b;
        line-height: 30px;
        padding: 7px 9px;
      }
    }

    .item-num-container{
      .item-num{
        color: #bcb7af;
        font-size: 12px;
        width: 47px;
        text-align: center;
        font-weight: 400;
        line-height: 30px;
        padding: 7px 9px;
      }
    }
  }

  .task-main-container{
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 822px;
    margin: 0 4px;
    padding: 0 4px;

    .task-container{
      padding: 0;
      min-height: 20px;


    }
  }

  .task-footer-container{
    position: relative;
    z-index: 2;
    padding: 5px 8px 0 0;
    line-height: 28px;

    .task-footer{
      display: block;
      color: #bcb7af;
      text-align: left;
      padding: 3px 10px;
      cursor: pointer;

      &:hover{
        color: #acaba7;
      }
    }
  }
}
</style>
