import { fetch, createFilteredUrl } from '../../lib'

export default {
  async getFixtureById ({ commit }, id) {
    try {
      const res = await fetch(`fixtures/${id}`)
      commit('GET_FIXTURE_BY_ID', res.data)
    } catch (err) {
      console.log('Action: getFixtureById\n', err)
    }
  },
  async getFixtures ({ commit, state }, getAllFixture = false) {
    try {
      const startPrefix = 'fixtures?'
      const filteredPrefix = Object.keys(state.filter)
        .reduce(createFilteredUrl, startPrefix)
      const url = (getAllFixture) ? filteredPrefix : `${filteredPrefix}_page=${state.page}`
      const res = await fetch(url)
      commit('GET_FIXTURES', res)
    } catch (err) {
      console.log('Action: getFixtures\n', err)
    }
  },
  updateFixtureFilter ({ commit, state }, { name, value }) {
    state.filter[name] === undefined
    ? commit('UPDATE_FIXTURE_FILTER', { name, value })
    : commit('ADD_FIXTURE_FILTER', { name, value })
  },
  clearFixtureFilter ({ commit }) {
    commit('CLEAR_FIXTURE_FILTER')
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
  },
  nextPage ({ commit }, value) {
    commit('NEXT_FILTER_PAGE')
  },
  prevPage ({ commit }, value) {
    commit('PREV_FILTER_PAGE')
  }
}
