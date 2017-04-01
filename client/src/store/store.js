import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    routerLevel:[],
    firstRouterName:'',
    secondRouterName:'',
    thirdRouterName:'',
    isLogin:false
  },
  getters:{
  },
  mutations:{
    refreshRouterLevel (state,path){
      state.routerLevel=path.split('/').splice(1)
    },
    refreshRouterName (state){
      let routerLevel=state.routerLevel
      const leventLength=routerLevel.length

      if(leventLength>0) {
        state.firstRouterName=routerLevel[0]
      }
      if(leventLength>1){
        state.secondRouterName=routerLevel[1]
      }
      if(leventLength>2){
        state.thirdRouterName=routerLevel[2]
      }
    }
  },
  actions:{
    increment ({commit},n){
      commit('increment',n)
    },
    refreshRouterLevel ({commit},path){
      commit('refreshRouterLevel',path)
    },
    refreshRouterName ({commit}){
      commit('refreshRouterName')
    }
  }
})

export {store}
