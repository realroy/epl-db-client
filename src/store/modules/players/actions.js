import { fetch } from '../../lib'

export default {
  async getPlayerById ({ commit }, id) {
    try {
      const data = await fetch(`players/${id}`)
      commit('GET_PLAYER_BY_ID', data)
    } catch (err) {
      console.error(err)
    }
  },
  async getPlayers ({ commit, state }, { allPage = false, cb }) {
    try {
      const startPrefix = 'players?'
      const filteredPrefix = Object.keys(state.filter).reduce((url, key) => url + `${key}=${state.filter[key]}&`, startPrefix)
      const url = (allPage) ? filteredPrefix : `${filteredPrefix}_page=${state.page}`
      const data = await fetch(url)
      commit('GET_PLAYERS', data)
      if (cb !== undefined) cb()
    } catch (err) {
      console.error(err)
    }
  },
  updatePlayerFilter ({ commit, dispatch, state }, { name, value }) {
    value === ''
    ? commit('REMOVE_PLAYER_FILTER', { name })
    : commit('UPDATE_PLAYER_FILTER', { name, value })
  },
  clearPlayerFilter ({ commit }) {
    commit('CLEAR_PLAYER_FILTER')
  },
  updatePlayerPage ({ commit, dispatch, state }, mode = 'NEXT') {
    switch (mode) {
      case 'NEXT':
        dispatch('nextPlayerPage')
        break
      case 'PREV':
        dispatch('prevPlayerPage')
        break
      default:
    }
  },
  resetPlayerPage ({ commit }) {
    commit('RESET_PLAYER_PAGE')
  },
  nextPlayerPage ({ commit }) {
    commit('NEXT_PLAYER_PAGE')
  },
  prevPlayerPage ({ commit }) {
    commit('PREV_PLAYER_PAGE')
  },
  clearPlayers ({ commit }) {
    commit('CLEAR_PLAYERS')
  }
}
