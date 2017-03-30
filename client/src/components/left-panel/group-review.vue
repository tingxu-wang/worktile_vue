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
    <modal :hook="modalHook">
      <template slot="title">新建团队</template>
      <template>
        <ul class="modal-ul">
          <li :class="{step_cursor:stepIndex==index}" v-for="(modelRowInfo,index) in modelRowInfoArr">
            {{ modelRowInfo }}
          </li>
        </ul>
        <alert-danger :message="errMsg" type="danger"></alert-danger>
        <div class="form modal-form-container">
          <div v-if="stepIndex===0">
            <div class="form-group">
              <label>团队名称</label>
              <input type="text" class="form-control" v-model="groupName" placeholder="输入团队名称">
            </div>
            <div class="form-group">
              <label>队长</label>
              <input type="text" class="form-control" v-model="leaderName" placeholder="输入队长姓名" disabled>
            </div>
            <div class="form-group">
              <label>队长手机号</label>
              <input type="text" class="form-control" v-model="leaderPhone" placeholder="输入队长手机号" disabled>
            </div>
          </div>
          <div v-else-if="stepIndex===1">
            1
          </div>
        </div>
      </template>
      <template slot="footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancelCreate()">取消</button>
        <button type="button" class="btn btn-default" v-if="stepIndex>0" @click="prvStep()">上一步</button>
        <button type="button" class="btn btn-primary" @click="nextStep()">下一步</button>
      </template>
    </modal>
  </div>
</template>

<script>
import modal from '@pub/modal'
import alert from '@pub/alert'
export default {
  data (){
    return {
      modalHook:false,
      modelRowInfoArr:['1 基本信息','2 邀请成员','3 完成'],
      stepIndex:0,
      groupName:'',
      errMsg:''
    }
  },
  computed:{
    leaderName (){
      return this.$getFromSession('userName')
    },
    leaderPhone (){
      return this.$getFromSession('phone')
    }
  },
  methods:{
    createGroup (){
      this.modalHook=!this.modalHook
    },
    cancelCreate (){
      this.stepIndex=0
    },
    nextStep (){
      this.errMsg=''
      if(this.stepIndex===0 && !this.groupName){
        this.errMsg='请填写团队名称'
        return
      }

      this.stepIndex+=1
    },
    prvStep (){
      this.stepIndex-=1
    }
  },
  components:{modal,alertDanger:alert},
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
  ul.modal-ul{
    display: flex;
    padding-left: 0px;
    li{
      line-height: 35px;
      font-size: 14px;
      text-align: center;
      color: #b9b9b7;
      border-top: solid 5px #f8f6f2;
      flex:1;
      &.step_cursor{
        color: #2e2d2b;
        border-top: solid 5px #54d09f;
      }
    }
  }
  .modal-form-container{
    padding:0 15px;
  }
}
</style>
