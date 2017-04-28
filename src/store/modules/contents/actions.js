import { fetch, post, del, put } from '../../lib'

export default {
  selectContent ({ commit, state }, id) {
    state.selected[id] === undefined
    ? commit('SELECT_CONTENT', id)
    : commit('DESELECT_CONTENT', id)
  },
  async addNewContent ({ commit, dispatch }, { type, params }) {
    try {
      await post(`${type}`, params)
      await dispatch('loadContent', { type, allPage: false, more: false })
    } catch (err) {
      console.error(err)
    }
  },

  async loadContent ({ commit, state }, { type, allPage, more }) {
    try {
      const allPage = allPage || false
      const startPrefix = `${type}?`
      const filteredPrefix = Object.keys(state[type].filter)
        .reduce((url, key) => url + `${key}=${state[type].filter[key]}&`, startPrefix)
      const url = (allPage) ? filteredPrefix : `${filteredPrefix}_page=${state.page}`
      const data = await fetch(url)
      more ? commit('LOAD_MORE_CONTENTS', data) : commit('LOAD_NEW_CONTENTS', data)
    } catch (err) {
      console.error(err)
    }
  },

  async getContentById ({ commit }, { type, id }) {
    try {
      const data = await fetch(`${type}?/${id}`)
      commit('LOAD_CONTENT_BY_ID', { type, data })
    } catch (err) {
      console.error(err)
    }
  },

  async editContent ({ commit, dispatch }, { type, params }) {
    try {
      await put(`${type}`, params)
      await dispatch('loadContent')
    } catch (err) {
      console.error(err)
    }
  },

  async deleteContent ({ commit, dispatch }, { type, id }) {
    try {
      await del(`${type}`, id)
      await dispatch('loadContent')
    } catch (err) {
      console.error(err)
    }
  },

  async getTotalContentPage ({ commit }, { type }) {},

  nextContentPage ({ commit }, { type }) {
    commit('NEXT_CONTENT_PAGE')
  },

  prevContentPage ({ commit, state }) {
    if (state.page > 1) commit('PREV_CONTENT_PAGE')
  },

  resetContentPage ({ commit }) {
    commit('RESET_CONTENT_PAGE')
  },

  updateContentFilter ({ commit, state }, { type, name, value }) {
    value === ''
    ? commit('DELETE_CONTENT_FILTER', { type, name })
    : commit('UPDATE_CONTENT_FILTER', { type, name, value })
  },

  clearContentFilter ({ commit }, { type }) {
    commit('CLEAR_CONTENT_FILTER', type)
  }
}
