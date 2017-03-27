let MyPlugin={}
MyPlugin.install=function(Vue){
  Vue.prototype.$isFormEmpty=function(formInfo){
    const keys=Object.keys(formInfo)
    const result=keys.every((key)=>{
      return formInfo[key]!==''
    })
    return result
  }
}

export {MyPlugin}
