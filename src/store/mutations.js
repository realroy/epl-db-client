export default {
  GET_RANKING (store, data) {
    store.rankings = data
  },
  GET_ALL_CLUBS (store, data) {
    store.clubs = data
  },
  GET_CLUB (store, data) {
    store.club = data[0]
  },
  GET_ALL_PLAYERS (store, data) {
    store.players = data
  },
  GET_PLAYER (store, data) {
    store.player = data
  },
  GET_ALL_MANAGERS (store, data) {
    store.managers = data
  },
  GET_MORE_PLAYERS (store, data) {
    store.filteredPlayers = data
  },
  INIT_FILTERED_PLAYERS ({ filteredPlayers }, data) {
    filteredPlayers = []
    filteredPlayers.push({ name: 'text', value: '' })
    data.forEach(({ name }) => filteredPlayers.push({name, value: 'none'}))
  },
  GET_FILTERED_PLAYERS (store, data) {
    store.filteredPlayers = data
  },
  CLEAR_FILTERED_PLAYERS (store) {
    store.filterList = [{
      name: 'text',
      data: ''
    },
    {
      name: 'position',
      data: 'none'
    },
    {
      name: 'club_name',
      data: 'none'
    },
    {
      name: 'nationality',
      data: 'none'
    }]
  },
  UPDATE_TEXT_FILTER_PLAYERS (store, text) {
    store.filterList[0].data = text
  },
  UPDATE_FILTER_PLAYERS (store, result) {
    store.filterList[result.id].data = result.value
  },
  RESET_PAGE_PLAYER (store) {
    store.playerPage = 1
  },
  UPDATE_CLUB_DETAIL_TAB (store, index) {
    store.clubDetailTab = index
  }
}
