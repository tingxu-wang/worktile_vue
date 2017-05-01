<template lang="html">
  <div class="main-container">
    <span class="main-title">项&nbsp;&nbsp;目</span>
    <button class="btn btn-primary btn-sm" @click="createProject()"><span class="glyphicon glyphicon-plus"></span></button>
    <project-modal :hook="projectHook">
      <template slot="title">
        新建项目
      </template>
      <template>
        <danger-alert type="danger" :message="errMsg"></danger-alert>
        <div class="form">
          <div class="form-group">
            <input type="text" class="form-control" v-model="projectName" placeholder="请输入项目名称">
          </div>
          <div class="form-group">
            <textarea class="form-control" v-model="projectDescription" placeholder="项目描述（可选）"></textarea>
          </div>
        </div>
      </template>
      <template slot="footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" @click="postProjectInfo">创建</button>
      </template>
    </project-modal>
    <project-item :project-arr="projectArr"></project-item>
  </div>
</template>

<script>
import modal from '@pub/modal'
import alert from '@pub/alert'
import projectItem from './project/project-item'
export default {
  created (){
    this.getProjectInfo()
  },
  watch:{
    '$route':'getProjectInfo'
  },
  data (){
    return {
      projectHook:false,
      errMsg:'',
      projectName:'',
      projectDescription:'',
      projectArr:[]
    }
  },
  methods:{
    createProject (){
      this.projectHook=!this.projectHook
    },
    postProjectInfo (){
      this.errMsg=''
      let infoObj={
        name:this.projectName,
        description:this.projectDescription,
        group_id:this.$route.params.groupId
      }
      if(this.projectName===''){
        this.errMsg='请填写项目名称！'
      }else{
        this.$post('/api/Projects',infoObj)
          .then(body=>{
            this.projectArr.push(body)
            this.$hideModal()
            this.projectName=''
            this.projectDescription=''
          })
      }
    },
    getProjectInfo (){
      const groupId=this.$route.params.groupId
      this.$get(`/api/Groups/${groupId}/projects`)
        .then(body=>{
          this.projectArr=body
        })
    }
  },
  components:{projectItem,projectModal:modal,dangerAlert:alert}
}
</script>

<style lang="scss" scoped>
.main-container{
  background: #fff;
  min-height:900px;
  margin:7px 14px;
  padding:21px;
  .main-title{
    user-select: none;
    border-bottom: solid 1px #f8f6f2;
    padding: 0 15px 14px 2px;
    font-weight: 400;
    color: #777;
    font-size: 17px;
    line-height: 100%;
    display: inline-block;
  }
}
</style>
