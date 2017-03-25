let MyPlugin={}
MyPlugin.install=function(Vue){
  Vue.prototype.$getRouterMatch=function(path){
    return path.split('/').splice(1)
  }
}

export {MyPlugin}
