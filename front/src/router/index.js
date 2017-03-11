import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Main from '@/components/Main'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import test from '@/components/test'

Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes:[
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path:'/',
      name:'main',
      component: Main,
      children:[
        {
          path:'/test',
          component: test
        }
      ]
    }
  ]

})
