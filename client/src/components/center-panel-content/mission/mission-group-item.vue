<template lang="html">
  <div class="mission-group-item">
    <div class="mission-group-header clearfix">
      <div class="mission-group-title-container pull-left">
        <div class="mission-group-title">
          {{ taskGroup.name }}
        </div>
      </div>
      <div class="item-num-container pull-right">
        <div class="item-num">{{ tasks.length }}</div>
      </div>
    </div>
    <div class="task-main-container">
      <div class="task-container">
        <mission-task :tasks="tasks"></mission-task>
      </div>
    </div>
    <div class="task-footer-container">
      <div class="task-footer" @click="createTask" v-if="!iscreateTask">
        <i class="glyphicon glyphicon-plus-sign"></i>
        新建任务
      </div>
      <div class="form" v-else>
        <div class="form-group">
          <textarea class="form-control" rows="3" v-model="taskName" placeholder="请输入任务内容"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-success" @click.stop="postTask">保存</button>
          <button class="btn btn-default" @click.stop="cancelCreateTask">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import missionTask from './mission-task'
export default {
  created (){
    this.$filterGet('/api/Tasks',{task_group_id:this.taskGroup.id})
      .then(body=>{
        this.tasks=body
      })
  },
  data (){
    return {
      iscreateTask:false,
      taskName:'',
      tasks:[]
    }
  },
  methods:{
    createTask (){
      this.iscreateTask=true
    },
    cancelCreateTask (){
      this.iscreateTask=false
    },
    postTask (){
      if(this.taskName!==''){
        let infoObj={
          task_group_id:this.taskGroup.id,
          task_group_name:this.taskGroup.name,
          project_id:this.taskGroup.project_id,
          project_name:this.taskGroup.project_name,
          focus_person_info:[{id:this.$getFromSession('userInfo','id'),headName:this.$getFromSession('userInfo','headName')}],
          name:this.taskName,
          create_time:Date.now(),
          create_person_id:this.$getFromSession('userInfo','id'),
          is_solved:false,
          solve_person_info:[],
          description:'',
          dead_time:'',
          tags:[]
        }
        this.$post('/api/Tasks',infoObj)
          .then(body=>{
            this.iscreateTask=false
            this.taskName=''
            this.tasks.push(body)
          })
      }
    }
  },
  components:{missionTask},
  props:['taskGroup']
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
    padding: 5px 8px 0;
    line-height: 28px;

    .task-footer{
      display: block;
      color: #bcb7af;
      text-align: left;
      padding: 3px 0px;
      cursor: pointer;

      &:hover{
        color: #acaba7;
      }
    }
  }
}
</style>
