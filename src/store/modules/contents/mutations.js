export default {
  SELECT_CONTENT (store, id) {
    store.selected[id] = true
  },
  DESELECT_CONTENT (store, id) {
    delete store.selected[id]
  },
  LOAD_CONTENT_BY_ID (store, { type, data }) {
    store[type].content = data
  },
  LOAD_MORE_CONTENTS (store, { type, data }) {
    store[type].contents.push(data)
  },
  LOAD_NEW_CONTENTS (store, { type, data }) {
    store[type].contents.push(data)
  },
  NEXT_CONTENT_PAGE (store, { type }) {
    store[type].page++
  },
  PREV_CONTENT_PAGE (store, { type }) {
    store[type].page--
  },
  RESET_CONTENT_PAGE (store, { type }) {
    store[type].page = 1
  },
  DELETE_CONTENT_FILTER (store, { type, name }) {
    delete store[type].filter[name]
  },
  UPDATE_CONTENT_FILTER (store, { type, name, value }) {
    store[type].filter[name] = value
  },
  CLEAR_CONTENT_FILTER (store, { type }) {
    store[type].filter = {}
  }
}
