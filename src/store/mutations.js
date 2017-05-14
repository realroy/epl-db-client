export default {
  VALID_AUTH (store) {
    store.validAuth = true
  },
  INVALID_AUTH (store) {
    store.validAuth = false
  },
  LOGOUT_SUCCESSFULLY (store) {
    store.validAuth = false
  },
  LOGOUT_FAIL (store) {
    store.validAuth = true
  }
}
