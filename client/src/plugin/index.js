let MyPlugin={}
MyPlugin.install=function(Vue){
  const _this=Vue.prototype

  _this.$isFormEmpty=function(formInfo){
    const keys=Object.keys(formInfo)
    const result=keys.every((key)=>{
      return formInfo[key]!==''
    })
    return result
  }

  _this.$getFromSession=function(key,infoKey=false){
    if(infoKey){
      const sessionObj=JSON.parse(sessionStorage.getItem(key))
      return sessionObj[infoKey]
    }else{
      return sessionStorage.getItem(key)
    }
  }

  _this.$saveToSession=function(key,item){
    sessionStorage.setItem(key,JSON.stringify(item))
  }

  _this.$saveLoginInfo=function(infoObj){
    sessionStorage.setItem('isLogin',true)
    _this.$saveToSession('userInfo',infoObj)
  }

  _this.$post=function(url,obj){
    return this.$http.post(url,obj)
      .then(({status,body,code})=>{
        if(status===200){
          return body
        }else{
          throw new Error(`服务器出现错误！status:${status},code:${code},url:${url}`)
        }
      })
      .catch(err=>{
        throw new Error(err)
      })
  }

  _this.$paramsPost=function(url,obj,params){
    return this.$http.post(url,obj,{params})
      .then(({status,body,code})=>{
        if(status===200){
          return body
        }else{
          throw new Error(`服务器出现错误！status:${status},code:${code},url:${url}`)
        }
      })
      .catch(err=>{
        throw new Error(err)
      })
  }

  _this.$filterPost=function(url,obj,filter){
    return this.$http.post(url,obj,{params:{where:filter}})
      .then(({status,body,code})=>{
        if(status===200){
          return body
        }else{
          throw new Error(`服务器出现错误！status:${status},code:${code},url:${url}`)
        }
      })
      .catch(err=>{
        throw new Error(err)
      })
  }

  _this.$get=function(url){
    return this.$http.get(url)
      .then(({status,body,code})=>{
        if(status===200){
          return body
        }else{
          throw new Error(`服务器出现错误！status:${status},code:${code},url:${url}`)
        }
      })
      .catch(err=>{
        throw new Error(err)
      })
  }

  _this.$paramsGet=function(url,params){
    return this.$http.get(url,{params})
      .then(({status,body,code})=>{
        if(status===200){
          return body
        }else{
          throw new Error(`服务器出现错误！status:${status},code:${code},url:${url}`)
        }
      })
      .catch(err=>{
        throw new Error(err)
      })
  }

  _this.$filterGet=function(url,filter){
    return this.$http.get(url,{params:{filter:{where:filter}}})
      .then(({status,body,code})=>{
        if(status===200){
          return body
        }else{
          throw new Error(`服务器出现错误！status:${status},code:${code},url:${url}`)
        }
      })
      .catch(err=>{
        throw new Error(err)
      })
  }

  _this.$hideModal=function(){
    $('.modal').modal('hide')
  }
}

export {MyPlugin}
