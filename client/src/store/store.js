import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    count:0,
    arr:[1,2,3]
  },
  getters:{
    getArrLength:state =>state.arr.length
  },
  mutations:{
    increment (state,n){
      state.count+=n
    }
  },
  actions:{
    increment ({commit},n){
      commit('increment',n)
    }
  }
})

export {store}
