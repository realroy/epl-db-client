import { fetch } from '../../lib'

export default {
  getAllClubs ({ commit }) {
    fetch(`clubs`)
      .then(res => commit('GET_ALL_CLUBS', res))
      .catch(console.error)
  },
  getClubByName ({ commit }, name) {
    fetch(`clubs?name=${name}`)
      .then(res => commit('GET_CLUB_BY_NAME', res))
      .catch(console.err)
  }
}
