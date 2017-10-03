import axios from 'axios'

export function fetchById(pageNumber) {
  console.log(pageNumber)
  const url = `/api/products?_page=${pageNumber}&_limit=15`
  return axios.get(url).then(res => {
    console.log(res.data)
    return res.data
  })
}