export const getCartTotal = (obj) => {
  return Object.values(obj)
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);
};
