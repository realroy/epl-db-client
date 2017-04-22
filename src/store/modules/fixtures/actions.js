import { fetch } from '../../lib'

export default {
  async getFixtureById ({ commit }, id) {
    try {
      const res = await fetch(`fixtures/${id}`)
      commit('GET_FIXTURE_BY_ID', res.data)
    } catch (err) {
      console.log('Action: getFixtureById\n', err)
    }
  },
  async getFixtures ({ commit, state }, { allPage = false, cb }) {
    try {
      const startPrefix = 'fixtures?'
      const filteredPrefix = Object.keys(state.filter)
        .reduce((url, key) => url + `${key}=${state.filter[key]}&`, startPrefix)
      const url = (allPage) ? filteredPrefix : `${filteredPrefix}_page=${state.page}`
      const data = await fetch(url)
      commit('GET_FIXTURES', data)
      if (cb !== undefined) cb()
    } catch (err) {
      console.log('Action: getFixtures\n', err)
    }
  },
  updateFixtureFilter ({ commit, state }, { name, value }) {
    state.filter[name] === undefined
    ? commit('REMOVE_FIXTURE_FILTER', { name })
    : commit('UPDATE_FIXTURE_FILTER', { name, value })
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
  resetFixturePage ({ commit }) {
    commit('RESET_FIXTURE_PAGE')
  },
  nextFilterPage ({ commit }) {
    commit('NEXT_FILTER_PAGE')
  },
  prevFilterPage ({ commit }) {
    commit('PREV_FILTER_PAGE')
  },
  clearFixtures ({ commit }) {
    commit('CLEAR_FIXTURES')
  }
}
