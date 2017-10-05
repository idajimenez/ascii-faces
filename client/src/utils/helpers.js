export function toCents(price) {
  return `$${price / 100}`;
}

export function toDate(date) {
  let now = new Date();
  let productDate = new Date(date);
  let dayDiff    = dateDiffInDays(now, productDate);

  if (dayDiff > 7 ) { 
    return productDate.toLocaleDateString();
  } else if (dayDiff === 0) {
    return 'Today';
  } else {
    let text = (dayDiff > 1) ? 'days' : 'day'; 
    return `${dayDiff} ${text} ago`;    
  }
}

export function dateDiffInDays(a, b) {
  let _MS_PER_DAY = 1000 * 60 * 60 * 24;
  let utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  let utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc1 - utc2) / _MS_PER_DAY);
}

export function getSortOption(sortBy) {
  let sort = (sortBy.indexOf('price') !== -1) ? 'price' : 'size'; 
  let order = (sortBy.indexOf('Asc') !== -1) ? 'ASC' : 'DESC';

  return sortBy === 'default' ? '' : `_sort=${sort}&_order=${order}&`;
}

export function insertAd(res) {
  let result = res.data;
  let random = Math.floor(Math.random()*1000);
  let ads = {
    id: `${random}`, 
    source: `ads/?r=${random}`
  }
  result.push(ads);
}