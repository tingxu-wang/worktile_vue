<template lang="html">
  <div class="content-main-container">
    <span class="main-title">添加文档</span>
    <button class="btn btn-primary btn-sm" @click="createDocument()"><span class="glyphicon glyphicon-plus"></span></button>
    <modal :hook="createHook">
      <template slot="title">
        新建文档
      </template>
      <template>
        <alert type="danger" :message="errMsg"></alert>
        <div class="form">
          <div class="form-group">
            <input type="text" class="form-control" v-model="documentName" placeholder="请输入文档名称">
          </div>
          <div class="form-group">
            <textarea class="form-control" v-model="documentContent" placeholder="文档正文" rows="8"></textarea>
          </div>
        </div>
      </template>
      <template slot="footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" @click="postDocumentInfo">创建</button>
      </template>
    </modal>

    <div class="project-main-container">
      <div class="item" v-for="(doc,$index) in docArr" @click="showDoc($index)">
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
        <div class="delete-container" @click.stop="deleteDoc(doc.id,$index)">
          删除
        </div>
      </div>
      <documentModal :docHook="docHook" :docModalInfo="docModalInfo"></documentModal>
    </div>

  </div>
</template>

<script>
import modal from '@pub/modal'
import alert from '@pub/alert'
import marked from 'marked'
import documentModal from './document-modal'
export default {
  created (){
    this.getDocs()
  },
  data (){
    return {
      createHook:false,
      docHook:false,
      documentName:'',
      documentContent:'',
      docArr:[],
      docModalInfo:{
      },
      errMsg:''
    }
  },
  methods:{
    createDocument (){
      this.createHook=!this.createHook
    },
    postDocumentInfo (){
      this.errMsg=''
      const markedContent=marked(this.documentContent)
      const params=this.$route.params
      if(markedContent && this.documentName){
        let postInfo={
          project_id:Number(params.projectId),
          content:markedContent,
          person_id:this.$getFromSession('userInfo','id'),
          person_name:this.$getFromSession('userInfo','name'),
          create_time:Date.now().toString(),
          title:this.documentName
        }
        this.$post('/api/Documents',postInfo)
        .then((res)=>{
          this.documentName=''
          this.documentContent=''
          this.docArr.push(res)
          this.$hideModal()
        })
      }else{
        this.errMsg='请填写全所有信息'
      }
    },
    getDocs (){
      this.$filterGet('/api/Documents',{
        project_id:this.$route.params.projectId
      })
      .then((res)=>{
        this.docArr=res
      })
    },
    showDoc (docIndex){
      const docInfo=this.docArr[docIndex]
      this.docModalInfo=docInfo
      this.docHook=!this.docHook
    },
    deleteDoc (id,index){
      this.$delete(`api/Documents/${id}`)
      .then((res)=>{
        this.docArr.splice(index,1)
      })
    }
  },
  components:{
    modal,
    alert,
    documentModal
  }
}
</script>

<style lang="scss" scoped>
</style>
