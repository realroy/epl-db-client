import { fetch } from '../../lib'

export default {
  async getAllClubs ({ commit }) {
    try {
      const data = await fetch('clubs')
      commit('GET_ALL_CLUBS', data)
    } catch (err) {
      console.error(err)
    }
  },
  async getClubByName ({ commit }, name) {
    try {
      const data = await fetch(`clubs?name=${name}`)
      commit('GET_CLUB_BY_NAME', ...data)
    } catch (err) {
      console.error(err)
    }
  },
  async getClubById ({ commit }, id) {
    try {
      const data = await fetch(`clubs/${id}`)
      commit('GET_CLUB_BY_ID', data)
    } catch (err) {
      console.error(err)
    }
  }
}
