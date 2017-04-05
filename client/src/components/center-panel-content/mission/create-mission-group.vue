<template lang="html">
  <div class="create-mission-container" :class="{'gray-bg':!showCreate}">
    <div class="create-mission" @click="createMission" v-if="!showCreate">
      <i class="glyphicon glyphicon-plus-sign"></i>
      新建任务列表
    </div>
    <div v-else class="form">
      <div class="form-group" v-if="errMsg">
        <danger-alert type="danger" :message="errMsg"></danger-alert>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="taskGroupName" placeholder="列表名">
      </div>
      <div class="form-group">
        <button class="btn btn-success" @click.stop="postCreate">保存</button>
        <button class="btn btn-default" @click.stop="cancelCreate">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import alert from '@pub/alert'
export default {
  data (){
    return {
      showCreate:false,
      taskGroupName:'',
      errMsg:''
    }
  },
  methods:{
    createMission (){
      this.showCreate=true
    },
    cancelCreate (){
      this.showCreate=false
    },
    postCreate (){
      this.errMsg=''
      if(this.taskGroupName){
        let infoObj={
          project_id:this.projectId,
          name:this.taskGroupName,
          index:this.taskGroupLength
        }
        this.$paramsGet('/api/Task_groups/count',{where:{name:infoObj.name}})
          .then(({count})=>{
            if(count===0){
              this.$post('/api/Task_groups',infoObj)
                .then(body=>{
                  this.$emit('taskGroupCreated',body)
                  this.showCreate=false
                  this.taskGroupName=''
                })
            }else{
              this.errMsg='该列表已存在！'
            }
          })
      }
    }
  },
  components:{dangerAlert:alert},
  props:['projectId','taskGroupLength']
}
</script>

<style lang="scss" scoped>
.gray-bg{
  background-color: #eeece8;
}
.create-mission-container{
  position: relative;
  min-height: 44px;
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
  margin: 7px 14px 0 10px;
  padding: 0;
  min-width: 279px;
  border-color: transparent;
  .create-mission{
    display: block;
    color: #b9b9b7;
    border-radius: 3px;
    line-height: 42px;
    width: 100%;
    font-size: 14px;
    padding-left: 17px;
    cursor: pointer;
    &:hover{
      color: #acaba7;
    }
  }
}
</style>
