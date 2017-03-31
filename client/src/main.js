// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'

import {store} from './store/store.js'

import {MyPlugin} from './plugin/index.js'

Vue.config.productionTip = false

Vue.use(resource)
Vue.use(MyPlugin)

router.beforeEach((to,from,next)=>{
  store.dispatch('refreshRouterLevel',to.path)
  store.dispatch('refreshRouterName')
  next()
})

router.beforeEach((to,from,next)=>{//检测是否登录
  const isLogin=sessionStorage.getItem('isLogin'),
    firstRouterName=store.state.firstRouterName
  // if(isLogin && firstRouterName==='login'){
  //   next(false)
  // }else if(isLogin && firstRouterName!=='login'){
  //   next()
  // }else if(!isLogin && firstRouterName==='login'){
  //   next()
  // }else
  if(!isLogin && firstRouterName!=='login' && firstRouterName!=='regist'){
    next({name:'login'})
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },

  created (){
    console.log('created')
  },
  beforeMount (){
    console.log('beforeMount')
  },
  mounted (){
    console.log('mounted')
  },
  beforeDestroy (){
    console.log('beforeDestroy')
  },
  destroyed (){
    console.log('destroyed')
  },
  updated (){
    console.log('updated')
  },
  beforeUpdate (){
    console.log('beforeUpdate')
  }
})
