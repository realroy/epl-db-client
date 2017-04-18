import axios from 'axios'

const API_ENDPOINT = 'http://localhost:8765'

export default {
  async getRanking ({ commit }) {
    const res = await axios.get(`${API_ENDPOINT}/clubs`)
    commit('GET_RANKING', res.data)
  },
  async getAllClubs ({ commit }) {
    const res = await axios.get(`${API_ENDPOINT}/clubs`)
    commit('GET_ALL_CLUBS', res.data)
  },
  async getClub ({ commit }, name) {
    const res = await axios.get(`${API_ENDPOINT}/clubs?name=${name}`)
    commit('GET_CLUB', res.data)
  },
  async getAllPlayers ({ commit }) {
    const res = await axios.get(`${API_ENDPOINT}/players`)
    commit('GET_ALL_PLAYERS', res.data)
  },
  async getPlayer ({ commit }, id) {
    const res = await axios.get(`${API_ENDPOINT}/players/${id}`)
    commit('GET_PLAYER', res.data)
  },
  async getAllManagers ({ commit }) {
    const res = await axios.get(`${API_ENDPOINT}/managers`)
    commit('GET_ALL_MANAGERS', res.data)
  },
  async getMorePlayers ({ commit }, page = 1) {
    const res = await axios.get(`${API_ENDPOINT}/players?_page=${page}`)
    commit('GET_MORE_PLAYERS', res.data)
  },
  initFilteredPlayers ({ commit }, filterList = []) {
    commit('INIT_FILTERED_PLAYERS', filterList)
  },
  async getFilteredPlayers ({ commit, state }, page = 1) {
    let url = `${API_ENDPOINT}/players?`
    state.filterList.forEach(({ name, data }, i) => {
      if (data !== '' && data !== 'none') {
        url += `${name}=${data.replace(' ', '-')}&`
      }
    })
    url += `_page=${page}`
    const res = await axios.get(url)
    commit('GET_FILTERED_PLAYERS', res.data)
  },
  async clearFilteredPlayers ({ commit }) {
    commit('CLEAR_FILTERED_PLAYERS')
  },
  updateFilter ({ commit }, data) {
    let id = -99
    if (data.name === 'position') {
      id = 1
    } else if (data.name === 'club_name') {
      id = 2
    } else if (data.name === 'nationality') {
      id = 3
    }
    const result = {id, value: data.value}
    commit('UPDATE_FILTER_PLAYERS', result)
  },
  updateTextFilter ({ commit, state }, text = '') {
    commit('UPDATE_TEXT_FILTER_PLAYERS', text)
  },
  resetPagePlayer ({commit}) {
    commit('RESET_PAGE_PLAYER')
  },
  updateClubDetailTab ({commit}, index = 0) {
    commit('UPDATE_CLUB_DETAIL_TAB', index)
  }
}
