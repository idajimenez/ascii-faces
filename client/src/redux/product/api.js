import axios from 'axios'
import { getSortOption, insertAd } from '../../utils/helpers';

export function fetchById(pageNumber) {
  const url = `/api/products?_page=${pageNumber}&_limit=20`
  return axios.get(url).then(res => {
    if (res.data.length !== 0) insertAd(res);
    return res.data
  })
}

export function sortProducts(sortBy, pageNumber) {
  let sort = (sortBy === 'id') ? '_sort=id&' : getSortOption(sortBy)
  const url = `/api/products?${sort}_page=${pageNumber}&_limit=20`
  return axios.get(url).then(res => {
    if (res.data.length !== 0) insertAd(res);
    return res.data
  })
}
