export default {
  GET_FIXTURE_BY_ID (store, nextState) {
    store.fixture = nextState
  },
  GET_FIXTURES (store, nextState) {
    store.fixtures = nextState
  },
  ADD_FIXTURE_FILTER (store, { name, value }) {
    store.filter[name] = value
  },
  UPDATE_FIXTURE_FILTER (store, { name, value }) {
    store.filter[name] = value
  },
  CLEAR_FIXTURE_FILTER (store) {
    store.filter = {}
  },
  NEXT_FILTER_PAGE (store) {
    store.page++
  },
  PREV_FILTER_PAGE (store) {
    store.page - 1 === 0 ? store.page : store.page--
  }
}
