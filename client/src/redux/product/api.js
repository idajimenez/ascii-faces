import axios from 'axios'

export function fetchById() {
  const url = `/api/products?_page=1&_limit=15`
  return axios.get(url).then(res => res.data)
}