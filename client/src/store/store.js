import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    count:0,
    arr:[1,2,3],
    routerLevel:[],
    firstRouterName:'',
    secondRouterName:'',
    thirdRouterName:'',
    isLogin:false,
    // userName:'',
    // shortUserName:'',
    // userId:null,
    // phone:''
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
        state.firstRouterName=routerLevel[0]
      }
      if(leventLength>1){
        state.secondRouterName=routerLevel[1]
      }
      if(leventLength>2){
        state.thirdRouterName=routerLevel[2]
      }
    },
    // login (state,infoObj){
    //   state.userName=infoObj.name
    //   state.userId=infoObj.id
    //   state.phone=infoObj.phone
    //   state.isLogin=true
    // },
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
    },
    // login ({commit},infoObj){
    //   commit('login',infoObj)
    // },
  }
})

export {store}
