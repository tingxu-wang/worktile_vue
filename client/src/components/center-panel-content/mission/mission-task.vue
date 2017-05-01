<template lang="html">
  <div>
    <div class="task clearfix" v-for="task in tasks" @click="showSlide(task.id,task.name)">
      <div class="task-title-container" :class="{completed:task.is_solved}">
        <div class="radio-box">
          <input type="checkbox" v-model="task.is_solved" @click="changeSolved(task.id,task.is_solved)">
        </div>
        <div class="task-title">{{ task.name }}</div>
        <div class="task-badges" v-if="!isProject">
          <div class="task-badge">
            <i class="glyphicon glyphicon-pushpin"></i>
            {{ task.project_name }}
          </div>
        </div>
        <div class="task-members">
          <div class="task-member-item" v-for="personInfo in task.focus_person_info">
            <div class="task-member-face">
              <div class="task-member-text">
                {{ personInfo.headName }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <task-slide :task-id="slideTaskId" :task-name="taskName" :is-show="isSlideShow" v-on:slideClose="closeSlide"></task-slide>
  </div>
</template>

<script>
import taskSlide from './task-slide'
export default {
  data (){
    return {
      slideTaskId:-1,
      taskName:'',
      isSlideShow:false
    }
  },
  computed:{
    isProject (){
      return this.$store.state.secondRouterName==='project'
    }
  },
  methods:{
    changeSolved (id,isSolved){
      let infoObj={
        is_solved:isSolved
      }
      this.$paramsPost('/api/Tasks/update',infoObj,{where:{id}})
        .then(body=>{

        })
    },
    showSlide (taskId,taskName){
      this.isSlideShow=true
      this.slideTaskId=taskId
      this.taskName=taskName
    },
    closeSlide (){
      this.isSlideShow=false
    }
  },
  components:{taskSlide},
  props:['tasks']
}
</script>

<style lang="scss" scoped>
.task{
  margin-bottom: 4px;
  border: solid 1px #e8e8ea;
  position: relative;
  border-bottom: solid 1px #e1e1e5;
  background: #fff;
  min-height: 46px;
  padding-bottom: 2px;
  line-height: 20px;
  cursor: pointer;
  &:hover{
    background: #f8f6f2;;
  }
  .completed{
    text-decoration: line-through;
  }
  .task-title-container{
    position: relative;
    padding: 11px 0 3px 0;

    .radio-box{
      display: block;
      position: absolute;
      left: 4px;
      top: 6px;
      width: 25px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #e1ddd5;
      font-size: 18px;

    }
    .task-title{
      display: block;
      word-wrap: break-word;
      white-space: normal;
      line-height: 21px;
      font-size: 14px;
      color: #484744;
      margin: 0 24px 0 32px;
    }
    .task-badges{
      float: left;
      margin: 0 8px 0 28px;
      white-space: normal;

      .task-badge{
        color: #acaba7;
        border-radius: 3px;
        -webkit-text-size-adjust: none;
        font-size: 11px;
        display: inline-block;
        line-height: 27px;
        padding: 0;
        margin-right: 7px;
        margin-left: 0;
      }
    }
    .task-members{
      float: right;
      padding: 0 8px;

      .task-member-item{
        margin-left: 5px;
        margin-bottom: 5px;
        float: right;
        position: relative;
        display: inline-block;
        zoom: 1;


        .task-member-face{
          display: inline-block;
          position: relative;
          zoom: 1;

          .task-member-text{
            width: 28px;
            height: 28px;
            line-height: 28px;
            font-size: 10px;
            text-align: center;
            overflow: hidden;
            display: inline-block;
            zoom: 1;
            vertical-align: middle;
            background: #64b1ca;
            border: solid 1px #64b1ca;
            font-size: 10px;
            border-radius: 50%;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
