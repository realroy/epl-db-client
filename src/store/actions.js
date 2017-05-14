export default {
  verifyAuthRequest ({ commit }, { username, password }) {
    (username === 'admin' && password === 'password') ? commit('VALID_AUTH') : commit('INVALID_AUTH')
  },
  logoutRequest ({ commit, store }) {
    (store.validAuth) ? commit('LOGOUT_SUCCESSFULLY') : commit('LOGOUT_FAIL')
  }
}
