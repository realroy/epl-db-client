import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import state from './initState'

Vue.use(Vuex)

export default new Vuex.Store({ actions, mutations, state })
