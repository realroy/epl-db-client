import { fetch } from '../../lib'

export default {
  async getAllClubs ({ commit }) {
    try {
      const res = await fetch('clubs')
      commit('GET_ALL_CLUBS', res.data)
    } catch (err) {
      console.error(err)
    }
  },
  async getClubByName ({ commit }, name) {
    try {
      const res = await fetch(`clubs?name=${name}`)
      commit('GET_CLUB_BY_NAME', res.data[0])
    } catch (err) {
      console.error(err)
    }
  },
  async getClubById ({ commit }, id) {
    try {
      const res = await fetch(`club?id=${id}`)
      commit('GET_CLUB_BY_ID', res.data[0])
    } catch (err) {
      console.error(err)
    }
  }
}
