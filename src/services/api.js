import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.188:3333'
})

api.interceptors.response.use(response => {
  const { data } = response
  return data
})

export default api
