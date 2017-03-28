<template lang="html">
  <div class="main-container">
    <alert-danger :message="errMsg" type="danger"></alert-danger>
    <div class="main">
      <div class="panel-header">
        企业合作管理系统
      </div>
      <div class="panel-body">
        <div class="form">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>作者：王庭旭</span>
      <span>本项目<a href="https://github.com/tingxu-wang/worktile_vue" target="_blank">github地址</a></span>
    </div>
  </div>
</template>

<script>
import alertDanger from './pub/alert'
export default {
  components:{alertDanger},
  props:['errMsg']
}
</script>

<style lang="scss" scoped>
$hoverColor:#da4f4a;

.main-container{
  .footer{
    text-align: center;

    span{
      margin:0 3px 5px;
    }
  }
  .main{
    width: 400px;
    margin: 0 auto;
    padding: 8% 0 2%;
    text-align: center;


    .panel-header{
      border: 0;
      text-align: center;
      padding-bottom: 10px;
      position: relative;
      margin:0 auto;
      color: #6f6e6b;
      outline: 0 none;
      vertical-align: middle;
      overflow: hidden;
      display: inline-block;
      font-size: 30px;
      cursor:default;
      transition: color 0.2s linear;

      &:hover{
        color: $hoverColor;
      }
    }

    .panel-body{
      margin-top: 5px;
      padding-bottom: 20px;
      padding-top: 20px;

      .panel-footer{
        border-top: 1px #e8edf3 solid;
        padding: 20px;
        text-align: center;
        line-height: 14px;

        & > a{
          color: #777;

          &:hover{
            color: $hoverColor;
            text-decoration: none;
          }
        }
      }
    }
  }
}

</style>
