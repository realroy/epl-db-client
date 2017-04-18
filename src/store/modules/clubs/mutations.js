export default {
  GET_ALL_CLUBS (store, nextState) {
    store.clubs = nextState
  },
  GET_CLUB_BY_NAME (store, nextState) {
    store.club = nextState[0]
  },
  UPDATE_DETAIL_TAB (store, nextState) {
    store.detailTab = nextState
  }
}
