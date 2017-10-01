export function toCents(price) {
  return `$${price / 100}`;
}

export function toDate(date) {
  let now = new Date();
  let productDate = new Date(date);
  let days = productDate.getDay();
  if (days > 6) {
    return date.getDate();
  } else if (days === 0) {
    return 'Today';
  } else {
    return `${days} days ago`;
  }
}