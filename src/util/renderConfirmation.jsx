import OrderConfirmation from "../components/order-confirmation/OrderConfirmation";

export const renderConfirmation = (
  orderConfirmed,
  cartState,
  setCartState,
  setOrderConfirmed
) => {
  return orderConfirmed ? (
    <OrderConfirmation
      cartState={cartState}
      setCartState={setCartState}
      orderConfirmed={orderConfirmed}
      setOrderConfirmed={setOrderConfirmed}
    />
  ) : null;
};
