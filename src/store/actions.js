import { fetch } from './lib'

export default {
  async getRanking ({ commit }) {
    fetch('clubs')
      .then(res => commit('GET_RANKING', res))
      .catch(console.error)
  },
  async getManagers ({ commit }) {
    fetch('managers')
      .then(res => commit('GET_MANAGERS', res))
      .catch(console.error)
  }
}
