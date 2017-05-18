
import axios from 'axios'

const API_ENDPOINT = 'http://localhost:3310'

const validatePage = (page) => {
  if (page <= 0) return 1
  else return page
}

export const fetch = async (content = '', attrs = {}, limit = 0, page = 1) => {
  page = validatePage(page)
  let url = Object.keys(attrs).reduce(
    (prev, key, index) => (index === 0) ? `${prev}${key}=${attrs[key]}` : `${prev}&${key}=${attrs[key]}`
    , `${API_ENDPOINT}/${content}?`)
  if (limit > 0) url += `&_page=${page}&_limit=${limit}`
  console.log(url)
  const res = await axios.get(url)
  return res.data
}

export const post = async (content = '', params = {}) => {
  const res = await axios.post(`${API_ENDPOINT}/${content}`, params)
  return res.data
}

export const put = async (content = '', params = {}) => {
  const res = await axios.put(`${API_ENDPOINT}/${content}`, params)
  return res.data
}

export const del = async (content = '', id = 1) => {
  const res = await axios.delete(`${API_ENDPOINT}/${content}/${id}`)
  return res.data
}

