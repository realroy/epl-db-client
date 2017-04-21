
import axios from 'axios'

export const API_ENDPOINT = 'http://localhost:8765'

export const fetch = async (url) => {
  const res = await axios.get(`${API_ENDPOINT}/${url}`)
  return res.data
}

export const createFilteredUrl = (url, { name, value }) => url + `${name}=${value}&`
