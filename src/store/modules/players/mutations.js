export default {
  GET_PLAYER_BY_ID (store, nextState) {
    store.player = nextState
  },
  GET_PLAYERS (store, nextState) {
    store.players = [...store.players, ...nextState]
  },
  REMOVE_PLAYER_FILTER (store, { name }) {
    delete store.filter[name]
  },
  UPDATE_PLAYER_FILTER (store, { name, value }) {
    store.filter[name] = value
  },
  CLEAR_PLAYER_FILTER (store) {
    store.filter = {}
  },
  NEXT_PLAYER_PAGE (store) {
    store.page++
  },
  PREV_PLAYER_PAGE (store) {
    store.page = (store.page - 1 === 0) ? store.page : store.page--
  },
  CLEAR_PLAYERS (store) {
    store.players = []
  },
  RESET_PLAYER_PAGE (store) {
    store.page = 1
  }
}
