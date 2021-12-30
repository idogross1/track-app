import { history } from '../history'
import Axios from 'axios'
const axios = Axios.create({ withCredentials: true })

// const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '//localhost:3030/'

export const httpService = {
  get(endpoint, data) {
    return ajax(endpoint, 'GET', data)
  },
  post(endpoint, data) {
    return ajax(endpoint, 'POST', data)
  },
  put(endpoint, data) {
    return ajax(endpoint, 'PUT', data)
  },
  delete(endpoint, data) {
    return ajax(endpoint, 'DELETE', data)
  },
}
async function ajax(endpoint, method = 'GET', data = null) {
  try {
    const res =
      method !== 'GET'
        ? await axios({
            url: endpoint,
            // url: `${BASE_URL}${endpoint}`,
            method,
            data,
          })
        : await axios({
            url: endpoint,
            // url: `${BASE_URL}${endpoint}`,
            method,
            params: data,
          })
    return res.data
  } catch (err) {
    console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
    if (err.response && err.response.status === 401) {
      history.push('/')
    }
    throw err
  }
}
