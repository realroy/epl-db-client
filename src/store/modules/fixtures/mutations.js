export default {
  GET_FIXTURE_BY_ID (store, nextState) {
    store.fixture = nextState
  },
  GET_FIXTURES (store, nextState) {
    store.fixtures = [...store.fixtures, ...nextState]
  },
  REMOVE_FIXTURE_FILTER (store, { name }) {
    const nextState = {}
    Object.keys(store.filter).forEach(key => {
      if (key !== name) {
        nextState[key] = store.filter[key]
      }
    })
    store.filter = nextState
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
  },
  CLEAR_FIXTURES (store) {
    store.fixtures = []
  },
  RESET_FIXTURE_PAGE (store) {
    store.page = 1
  }
}
