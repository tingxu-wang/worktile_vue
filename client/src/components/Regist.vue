<template lang="html">
  <log :err-msg="errMsg">
    <div class="form-group">
      <input type="text" class="form-control" v-model="formInfo.firstName" placeholder="姓">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" v-model="formInfo.secondName" placeholder="名">
    </div>
    <div class="form-group">
      <input type="phone" class="form-control" v-model="formInfo.phone" placeholder="电话号码">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" v-model="formInfo.password" placeholder="密码">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" v-model="formInfo.confirmPassword" placeholder="请再输入密码一次">
    </div>
    <div class="form-group">
      <button class="btn btn-block btn-lg btn-success" @click="submit()">注册</button>
    </div>
    <div class="panel-footer">
      <router-link :to="{name:'login'}">去登录</router-link>
    </div>
  </log>
</template>

<script>
import log from './log'
export default {
  data (){
    return {
      errMsg:'',
      formInfo:{
        firstName:'',
        secondName:'',
        phone:'', 
        password:'',
        confirmPassword:''
      }
    }
  },
  methods:{
    isEmpty (){
      const result=this.$isFormEmpty(this.formInfo)
      if(!result){
        this.errMsg='请填写全所有的字段'
      }
      return result
    },
    isPasswordSame (){
      const result= this.formInfo.password===this.formInfo.confirmPassword
      if(!result){
        this.errMsg='两次密码输入不相同'
      }
      return result
    },
    isRepeat (){
      let filter={where:{name:this.formInfo.name}}
      return this.$http.get('/api/People',
        {params:{filter}})
      .then((res)=>{
        return res
      })
      .catch((err)=>{
        console.error(err)
      })
    },
    postInfo (){
      let postInfo={
        firstName:this.formInfo.firstName,
        secondName:this.formInfo.secondName,
        name:this.formInfo.firstName+this.formInfo.secondName,
        phone:this.formInfo.phone,password:this.formInfo.password,
        headName:''
      }
      if(postInfo.secondName.length>1){
        postInfo.headName=postInfo.secondName
      }else{
        postInfo.headName=postInfo.name
      }
      this.$http.post('/api/People',postInfo)
        .then(({status,body})=>{
          if(status===200){
            this.$saveLoginInfo(body)
            this.$router.push({name:'main'})
          }
        })
        .catch((err)=>{
          console.error(err)
        })
    },
    submit (){
      this.errMsg=''
      if(this.isEmpty() && this.isPasswordSame()){
        this.isRepeat()
          .then(({status,body})=>{
            if(status===200){
              let personInfo=body[0]
              if(personInfo && personInfo.phone===this.formInfo.phone){
                this.errMsg='该手机号已注册！'
              }else{
                this.postInfo()
              }
            }else{
              this.errMsg='服务器出错鸟！'
            }
          })
      }
    }
  },
  components:{log}
}
</script>

<style lang="scss" scoped>
</style>
