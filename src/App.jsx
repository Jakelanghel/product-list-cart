import { GlobalStyles } from "./shared/Global";
import Menu from "./components/menu/Menu";
import { useState, useEffect } from "react";
import Cart from "./components/cart/Cart";
import OrderConfirmation from "./components/order-confirmation/OrderConfirmation";

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

  useEffect(() => {
    if (orderConfirmed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [orderConfirmed]);

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
