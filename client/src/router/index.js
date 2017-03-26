import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Main from '@/components/Main'

import mission from '@panelContent/mission/mission.vue'
import messages from '@panelContent/messages.vue'
import project from '@panelContent/project.vue'
import search from '@panelContent/search.vue'
import moments from '@panelContent/moments.vue'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      redirect:{name:'main'}
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path:'/main',
      name:'main',
      component: Main,
      redirect:{name:'dashboard'},
      children:[
        {
          path:'dashboard',
          name:'dashboard',
          redirect:{name:'mission'}
        },
        {
          path:'dashboard/mission',
          name:'mission',
          component:mission
        },
        {
          path:'dashboard/moments',
          name:'moments',
          component:moments
        },
        {
          path:'messages',
          name:'messages',
          component:messages
        },
        {
          path:'project',
          name:'project',
          component:project
        },
        {
          path:'search',
          name:'search',
          component:search
        }
      ]
    }
  ]

})
