export const formatNumber = (price, discount = 0) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price - (price / 100) * discount);
};
