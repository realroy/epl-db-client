import { fetch, createFilteredUrl } from '../../lib'

export default {
  async getFixtureById ({ commit }, id) {
    try {
      const res = await fetch(`fixtures/${id}`)
      commit('GET_FIXTURE_BY_ID', res.data)
    } catch (err) {
      console.log(err)
    }
  },
  async getFixtures ({ commit, state }, all = false) {
    try {
      const url = state.filters.reduce(createFilteredUrl, 'fixtures?')
      const result = (all) ? url : `${url}_page=${state.page}`
      const res = await fetch(result)
      commit('GET_PLAYERS', res.data)
    } catch (err) {
      console.log(err)
    }
  },
  async updateFixtureFilters ({ commit, dispatch, state }, { name, value }) {
    const index = state.filters.findIndex(f => f.name === name)
    index !== -1 ? commit('UPDATE_FIXTURE_FILTER', { index, value }) : commit('ADD_FIXTURE_FILTER', { name, value })
    dispatch('getPlayers')
  },
  clearFixtureFilters ({ commit, dispatch }) {
    commit('CLEAR__FIXTURE_FILTERS')
    dispatch('getFixtures')
  },
  updateFixturePage ({ commit, dispatch }, mode = 'NEXT') {
    switch (mode) {
      case 'NEXT':
        dispatch('nextFilterPage')
        break
      case 'PREV':
        dispatch('prevFilterPage')
        break
      default:
    }
    dispatch('getFilters')
  },
  nextPage ({ commit }) {
    commit('NEXT_FILTER_PAGE')
  },
  prevPage ({ commit }) {
    commit('PREV_FILTER_PAGE')
  }
}
