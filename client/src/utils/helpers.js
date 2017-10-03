export function toCents(price) {
  return `$${price / 100}`;
}

export function toDate(date) {
  let now = new Date();
  let productDate = new Date(date);
  let dayDiff    = dateDiffInDays(now, productDate);

  if (dayDiff > 7 ) { // Apply you login on remaining days
    return productDate.toLocaleDateString();
  } else {
    return `${dayDiff} days ago`;    
  }
}

export function dateDiffInDays(a, b) {
  let _MS_PER_DAY = 1000 * 60 * 60 * 24;
  let utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  let utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc1 - utc2) / _MS_PER_DAY);
}