<template lang="html">
  <log :err-msg="errMsg">
    <div class="form-group">
      <input type="text" class="form-control" v-model="formInfo.name" placeholder="用户名">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" v-model="formInfo.password" placeholder="密码">
    </div>
    <div class="form-group">
      <button class="btn btn-block btn-lg btn-success" @click="submit()">登录</button>
    </div>
    <div class="panel-footer">
      <router-link :to="{name:'regist'}">去注册</router-link>
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
        name:'',
        password:''
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
    submit (){
      if(this.isEmpty()){
        let filter={where:this.formInfo}
        this.$http.get('/api/People',{params:{filter}})
          .then(({status,body})=>{
            if(status===200){
              if(body.length===1){//已注册
                // this.$store.dispatch('login',body[0])
                let infoObj=body[0]
                sessionStorage.setItem('userName',infoObj.name)
                sessionStorage.setItem('phone',infoObj.phone)
                sessionStorage.setItem('userId',infoObj.id)
                sessionStorage.setItem('isLogin',true)
                this.$router.push({name:'main'})
              }else{
                this.errMsg='用户名或密码错误'
              }
            }else{
              this.errMsg='服务器出错鸟！'
            }
          })
          .catch(err=>{
            console.error(err)
          })
      }
    }
  },
  components:{log}
}
</script>

<style lang="scss" scoped>
</style>
