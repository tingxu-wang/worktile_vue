<template lang="html">
  <slide :is-show="isShow" v-on:slideClose="emitClose">
    <template slot="header">
      <div class="entity-project-name">
        {{ task.project_name }}
      </div>
    </template>
    <div slot="body" class="slide-body">
      <div class="body-title" :class="{'completed':task.is_solved}">
        {{ task.name }}
        <small>/{{ task.description || '项目暂无描述'}}</small>
        <input type="checkbox" class="tesk-status-btn" v-model="task.is_solved">
      </div>
      <div class="person-container clear-fix row">
        <div class="col-sm-6">
          <div class="title">
            分配任务给
          </div>
          <div class="person-header-container" v-for="person in task.solve_person_info">
            <span class="glyphicon glyphicon-remove"></span>
            <div class="g-user-head-default">
              {{ person.headName }}
            </div>
          </div>
          <div class="add-person-btn" @click="addSolve()" v-if="!isSolved">
            <span class="glyphicon glyphicon-plus"></span>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="title">
            关注的人
          </div>
          <div class="person-header-container" v-for="person in task.focus_person_info">
            <span class="glyphicon glyphicon-remove"></span>
            <div class="g-user-head-default">
              {{ person.headName }}
            </div>
          </div>
          <div class="add-person-btn" @click="addFocus()" v-if="!isFocus">
            <span class="glyphicon glyphicon-plus"></span>
          </div>
        </div>
      </div>
      <div class="comment-container">
        评论
        <div class="comment clear-fix">
          <div class="g-user-head-default pull-left">
            庭旭
          </div>
          <div class="content-container">
            <div>
              <span>王庭旭</span> <span class="time">2017年4月12日 12:12</span>
              <span class="delete-btn">删除</span>
            </div>
            <div>
              零度可乐是一种无糖饮料。
            </div>
          </div>
        </div>
      </div>
      <div class="post-comment-container">
        <div class="form-group">
          <textarea name="name" rows="8" cols="80" class="form-control"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">发表评论</button>
        </div>
      </div>
    </div>
  </slide>
</template>

<script>
import slide from "@pub/slide"
export default {
  data (){
    return {
      task:{}
    }
  },
  watch:{
    taskId (newVal){
      this.$filterGet('/api/Tasks',{id:this.taskId})
      .then(([task])=>{
        this.task=task
      })
    }
  },
  computed:{
    isFocus (){
      if(this.task.focus_person_info){
        return this.task.focus_person_info.some((item)=>{
          return item.id===this.$getFromSession('userInfo','id')
        })
      }else{
        return false
      }
    },
    isSolved (){
      if(this.task.solve_person_info){
        return this.task.solve_person_info.some((item)=>{
          return item.id===this.$getFromSession('userInfo','id')
        })
      }else{
        return false
      }
    }
  },
  methods:{
    addFocus (){
      let userInfo=JSON.parse(this.$getFromSession('userInfo'))
      delete userInfo.password
      this.$filterPost('/api/Tasks/update',{
        focus_person_info:[...this.task.focus_person_info,userInfo]
      },{
        id:this.task.id
      }).then((res)=>{
        this.task.focus_person_info.push(userInfo)
      })
    },
    addSolve (){
      let userInfo=JSON.parse(this.$getFromSession('userInfo'))
      delete userInfo.password
      this.$filterPost('/api/Tasks/update',{
        solve_person_info:[...this.task.solve_person_info,userInfo]
      },{
        id:this.task.id
      }).then((res)=>{
        this.task.solve_person_info.push(userInfo)
      })
    },
    emitClose (){
      this.$emit('slideClose')
    },
    updateTask (){
      this.$emit('updateTask',{
        name:this.task.name,
        is_solved:this.task.is_solved
      })
    }
  },
  components:{
    slide,
    addPerson:{
      template:`
      <div class="add-person-btn" @click="clickFn()">
        <span class="glyphicon glyphicon-plus"></span>
      </div>
      `,
      props:['clickFn']
    }
  },
  props:['taskId','taskName','isShow']
}
</script>

<style lang="scss" scoped>
$hover-color:#da4f4a;
$default-color:#acaba7;
$border:solid 1px #eeece8;
.entity-project-name{
  float:left;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor:pointer;
  &:hover{
    color:$hover-color;
  }
}
.slide-body{
  padding:0 40px;
  .completed{
    text-decoration: line-through;
  }
  .body-title{
    font-size: 20px;
    font-weight: 500;
    position: relative;
    small{
      color:$default-color;
    }
    .tesk-status-btn{
      position: absolute;
      left:-30px;
      top:4px;
    }
  }
  .person-container{
    margin-top: 30px;
    margin-bottom: 20px;
    border-bottom: $border;
    padding-bottom: 30px;
    .title{
      color:$default-color;
      margin-bottom: 20px;
    }
    .person-header-container{
      position: relative;
      display: inline-block;
      float:left;
      margin-right: 10px;
      &:hover{
        span{
          display: inline-block;
        }
      }
      span{
        font-size: 10px;
        position: absolute;
        right: -3px;
        top:-2px;
        display: none;
        cursor: pointer;
      }
    }
    .add-person-btn{
      width:40px;
      line-height:40px;
      border-radius: 30px;
      border:$border;
      float:left;
      text-align: center;
      color:$default-color;
      cursor: pointer;
      &:hover{
        border:1px solid $hover-color;
        color:$hover-color;
      }
    }
  }
  .comment-container{
    .comment{
      height:90px;
      padding:10px 0 5px;
      .content-container{
        margin-left: 50px;
        &:hover{
          .delete-btn{
            display: inline-block;
          }
        }
        .time{
          margin-left: 10px;
          color:$default-color;
        }
        .delete-btn{
          float: right;
          display: none;
          cursor: pointer;
          &:hover{
            color:$hover-color;
          }
        }
      }
    }
  }
  .post-comment-container{

  }
}
</style>
