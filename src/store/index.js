import Vue from 'vue'
import Vuex from 'vuex'
import todo from '@/pages/demo/todo/store'

Vue.use(Vuex)

const state = {
  'dingceng': true
}

export default new Vuex.Store({
  state,
  modules: {
    todo
  }
})
