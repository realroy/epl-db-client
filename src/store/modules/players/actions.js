import { fetch } from '../../lib'

export default {
  getPlayerById ({ commit }, id) {
    fetch(`players/${id}`)
      .then(res => commit('GET_PLAYER_BY_ID', res))
      .catch(console.error)
  },
  getPlayers ({ commit, state }) {
    let url = 'players?'
    state.filterList.forEach(({ name, data }, i) => {
      if (data !== '' && data !== 'none') {
        url += `${name}=${data.replace(' ', '-')}&`
      }
    })
    url += `_page=${state.page}`
    fetch(url)
      .then(res => commit('GET_PLAYERS', res))
      .catch(console.error)
  },
  updateFilters ({ commit, dispatch }, { name, value }) {
    commit('UPDATE_FILTERS', { name, value })
    dispatch('getPlayers')
  },
  clearFilters ({ commit, dispatch }) {
    commit('CLEAR_FILTERS')
    dispatch('getPlayers')
  },
  updatePage ({ commit, dispatch }, mode = 'NEXT') {
    switch (mode) {
      case 'NEXT':
        dispatch('nextPage')
        break
      case 'PREV':
        dispatch('prevPage')
        break
      default:
    }
    dispatch('getPlayers')
  },
  nextPage ({ commit }) {
    commit('NEXT_PAGE')
  },
  prevPage ({ commit }) {
    commit('PREV_PAGE')
  }
}
