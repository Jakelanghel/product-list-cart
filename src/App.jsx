import { GlobalStyles } from "./shared/Global";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import OrderConfirmation from "./components/order-confirmation/OrderConfirmation";

function App() {
  const [cartState, setCartState] = useState({});
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const renderedConfirmation = orderConfirmed ? (
    <OrderConfirmation cartState={cartState} setCartState={setCartState} />
  ) : null;

  return (
    <>
      <GlobalStyles />
      <Menu cartState={cartState} setCartState={setCartState} />
      <Cart
        cartState={cartState}
        setCartState={setCartState}
        setOrderConfirmed={setOrderConfirmed}
        orderConfirmed={orderConfirmed}
      />
      {renderedConfirmation}
    </>
  );
}

export default App;
