import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Main from '@/components/Main'

// import dashboard from '@panelContent/dashboard.vue'
import mission from '@panelContent/mission.vue'
import messages from '@panelContent/messages.vue'
import project from '@panelContent/project.vue'
import search from '@panelContent/search.vue'

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
      redirect:{name:'dashboard'},
      children:[
        // {
        //   path:'/dashboard',
        //   name:'dashboard',
        //   component:dashboard
        // },
        {
          path:'/mission',
          name:'mission',
          compoent:mission,
          alias:'/dashboard'
        },
        {
          path:'/messages',
          name:'messages',
          component:messages
        },
        {
          path:'/project',
          name:'project',
          component:project
        },
        {
          path:'/search',
          name:'search',
          component:search
        }
      ]
    }
  ]

})
