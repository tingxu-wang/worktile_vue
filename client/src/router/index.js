import Vue from 'vue'
import Router from 'vue-router'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'

// import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Main from '@/components/Main'

Vue.use(Router)
// Vue.use(iView)

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
