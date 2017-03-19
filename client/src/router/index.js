import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Main from '@/components/Main'

Vue.use(Router)

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
        // {
        //   path:'/',
        //   component:
        // }
      ]
    }
  ]

})
