export default {
  GET_RANKING (store, data) {
    store.rankings = data
  },
  GET_MANAGERS (store, data) {
    store.managers = data
  },
  VALID_AUTH (store) {
    store.validAuth = true
  },
  INVALID_AUTH (store) {
    store.validAuth = false
  },
  LOGOUT_SUCCESSFULLY (store) {
    store.validAuth = false
  },
  LOGOUT_FAIL (store) {}
}
