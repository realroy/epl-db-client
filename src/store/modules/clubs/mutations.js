export default {
  GET_ALL_CLUBS (store, nextState) {
    store.clubs = nextState
  },
  GET_CLUB_BY_NAME (store, nextState) {
    store.club = nextState
  },
  GET_CLUB_BY_ID (store, nextState) {
    store.club = nextState
  },
  CLEAR_FIXTURE_FILTER (store, nextState) {
    store.filter = {}
  }

}
