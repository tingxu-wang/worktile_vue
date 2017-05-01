<template lang="html">
  <div class="content-main-container">
    <div class="form-horizontal">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="输入查询关键词" v-model="keyWord" @keyup="search()">
        <span class="input-group-addon"><span class="glyphicon glyphicon-search" @click="search()"></span></span>
      </div>
    </div>
    <div class="searched-container">
      <div class="item" v-for="(doc,$index) in filteredDocArr" @click="showDoc($index)">
        <div class="icon-container">
          <i class="glyphicon glyphicon-file icon"></i>
        </div>
        <div class="text-container">
          <div>
            {{ doc.title }}
          </div>
          <div class="description">
            <br/>
          </div>
        </div>
      </div>
      <documentModal :docHook="docHook" :docModalInfo="docModalInfo"></documentModal>

      <projectItem :projectArr="filteredProjectArr"></projectItem>

      <div class="item" v-for="group in filteredGroupArr" @click="toGroup(group.id,group.name)">
        <div class="icon-container">
          <i class="glyphicon glyphicon-user icon"></i>
        </div>
        <div class="text-container">
          <div>
            {{ group.name }}
          </div>
          <div class="description">
            {{group.user_ids.length}}人
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import documentModal from './project/document-modal'
import projectItem from './project/project-item'

export default {
  created (){//获取所有的检索范围信息
    this.$get('/api/Documents').then((res)=>{
      this.docArr=res
    })
    this.$get('/api/Projects').then((res)=>{
      this.projectArr=res
    })
    this.$get('/api/Groups').then((res)=>{
      console.log(res)
      this.groupArr=res
    })
  },
  data (){
    return {
      keyWord:'',
      docHook:false,
      docArr:[],
      filteredDocArr:[],
      docModalInfo:{},
      projectArr:[],
      filteredProjectArr:[],
      groupArr:[],
      filteredGroupArr:[]
    }
  },
  methods:{
    getFiltered (arr,mathProp){
      return arr.filter((item)=>{
        if(this.keyWord){
          let reg=new RegExp(this.keyWord)
          return item[mathProp].match(reg)
        }else{
          return []
        }
      })
    },
    search (){
      this.filteredDocArr=this.getFiltered(this.docArr,'title')
      this.filteredProjectArr=this.getFiltered(this.projectArr,'name')
      this.filteredGroupArr=this.getFiltered(this.groupArr,'name')
    },
    showDoc (index){
      const docInfo=this.docArr[index]
      this.docModalInfo=docInfo
      this.docHook=!this.docHook
    },
    toGroup (groupId,groupName){
      this.$router.push({name:'group',params:{groupId,groupName}})
    }
  },
  components:{documentModal,projectItem}
}
</script>

<style lang="scss" scoped>
.searched-container{
  margin-top: 15px;
}
</style>
