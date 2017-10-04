import axios from 'axios'

export function fetchById(pageNumber, sortBy) {
  console.log(pageNumber)
  const url = `/api/products?_page=${pageNumber}&_limit=15`
  return axios.get(url).then(res => {
    console.log(res.data)
    return res.data
  })
}

export function sortProducts(sortBy) {

  const url = `/api/products?_sort=${sortBy}`
  return axios.get(url).then(res => {
    console.log('sort', res.data)
    return res.data
  })
}