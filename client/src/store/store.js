import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    count:0,
    arr:[1,2,3],
    routerLevel:[],
    secondRouterName:'',
    thiredRouterName:''
  },
  getters:{
    getArrLength:state =>state.arr.length
  },
  mutations:{
    increment (state,n){
      state.count+=n
    },
    refreshRouterLevel (state,path){
      state.routerLevel=path.split('/').splice(1)
    },
    refreshRouterName (state){
      let routerLevel=state.routerLevel
      const leventLength=routerLevel.length
      if(leventLength>0) {
        state.secondRouterName=routerLevel[1]
      }
      if(leventLength>1){
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
