import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import modules from './modules'

Vue.use(Vuex)

const state = {
  rankings: [],
  managers: [],
  validAuth: false
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  modules
})
