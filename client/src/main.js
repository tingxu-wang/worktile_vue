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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
