import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  rankings: [],
  clubs: [],
  club: {},
  players: [],
  player: {},
  managers: [],
  filteredPlayers: [],
  filterList: [
    {
      name: 'text',
      data: ''
    },
    {
      name: 'position',
      data: 'none'
    },
    {
      name: 'club_name',
      data: 'none'
    },
    {
      name: 'nationality',
      data: 'none'
    }
  ],
  playerPage: 1,
  clubDetailTab: 0
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
