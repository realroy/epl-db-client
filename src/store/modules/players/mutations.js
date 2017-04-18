export default {
  GET_PLAYER_BY_ID (store, nextState) {
    store.player = nextState
  },
  GET_PLAYERS (store, nextState) {
    store.players = nextState
  },
  UPDATE_FILTERS (store, nextState) {
    store.filters = [...store.filter, nextState]
  },
  CLEAR_FILTERS (store) {
    store.filters = []
  },
  NEXT_PAGE (store) {
    store.page++
  },
  PREV_PAGE (store) {
    store.page = (store.page - 1 === 0) ? store.page : store.page--
  }
}
