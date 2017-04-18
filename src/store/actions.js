import { fetch } from './lib'

export default {
  async getRanking ({ commit }) {
    fetch('clubs')
      .then(res => commit('GET_RANKING', res.data))
      .catch(console.error)
  },
  async getManagers ({ commit }) {
    fetch('managers')
      .then(res => commit('GET_MANAGERS', res.data))
      .catch(console.error)
  }
}
