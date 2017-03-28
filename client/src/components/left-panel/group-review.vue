<template lang="html">
  <div class="popbox group-pop" v-show="isShow">
    <div class="popbox-body">
      <ul class="popbox-menu">
        <li class="pop-title">
          <span>我的团队</span>
        </li>
        <li class="divider"></li>
        <li class="popbox-li">
          <div>团队名称</div>
          <small class="group-info-container">
            <span><i class="glyphicon glyphicon-user"></i>1人</span>
          </small>
        </li>
        <li class="divider"></li>
        <li class="create-group-btn-container">
          <button class="btn btn-block btn-success" @click="createGroup()">创建新团队</button>
        </li>
      </ul>
    </div>
    <modal :hook="modalHook" emit-name="modalChange">
      <template slot="title">aaaa</template>
    </modal>
  </div>
</template>

<script>
import modal from '@pub/modal'
export default {
  data (){
    return {
      modalHook:false
    }
  },
  methods:{
    createGroup (){
      this.modalHook=!this.modalHook
    }
  },
  components:{modal},
  props:['isShow']
}
</script>

<style lang="scss" scoped>
$liPadding:8px 30px;
.group-pop{
  top:0px;

  .create-group-btn-container{
    padding:$liPadding;
  }
  .pop-title{
    padding:$liPadding;
    font-size: 16px;
  }
  .popbox-li{
    // padding:0 $paddingSize;
    .group-info-container{
      i{
        margin-right: 5px;
        color:#777;
      }
    }
  }
}
</style>
