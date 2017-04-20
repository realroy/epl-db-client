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
  },
  async verifyAuthRequest ({ commit }, { username, password }) {
    (username === 'admin' && password === 'password') ? commit('VALID_AUTH') : commit('INVALID_AUTH')
  },
  async logoutRequest ({ commit, store }) {
    (store.validAuth) ? commit('LOGOUT_SUCCESSFULLY') : commit('LOGOUT_FAIL')
  }
}
