
import axios from 'axios'

export const API_ENDPOINT = 'http://localhost:8765'

export const fetch = async (url) => {
  const res = await axios.get(`${API_ENDPOINT}/${url}`)
  return res.data
}

export const post = async (url, params) => {
  const res = await axios.post(`${API_ENDPOINT}/${url}`, params)
  return res.data
}

export const put = async (url, params) => {
  const res = await axios.put(`${API_ENDPOINT}/${url}`, params)
  return res.data
}

export const del = async (url, id) => {
  const res = await axios.delete(`${API_ENDPOINT}/${url}/${id}`)
  return res.data
}

export const createFilteredUrl = (url, { name, value }) => url + `${name}=${value}&`
