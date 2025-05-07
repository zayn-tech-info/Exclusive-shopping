export function formatCurrency(price) {
  return Math.round(price).toFixed(2);
}

export function formatCurrencyPrice(price) {
  return (price).toFixed(0);
}