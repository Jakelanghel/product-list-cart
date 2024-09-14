import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import OrderConfirmation from "./components/order-confirmation/OrderConfirmation";

import { useState, useEffect } from "react";
import { GlobalStyles } from "./shared/Global";
import { useOverflow } from "./hooks/useOverflow";

function App() {
  const [cartState, setCartState] = useState({});
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const renderedConfirmation = orderConfirmed ? (
    <OrderConfirmation
      cartState={cartState}
      setCartState={setCartState}
      orderConfirmed={orderConfirmed}
      setOrderConfirmed={setOrderConfirmed}
    />
  ) : null;

  useOverflow(orderConfirmed);

  return (
    <>
      <GlobalStyles />
      <Menu cartState={cartState} setCartState={setCartState} />
      <Cart
        cartState={cartState}
        setCartState={setCartState}
        setOrderConfirmed={setOrderConfirmed}
      />
      {renderedConfirmation}
    </>
  );
}

export default App;
