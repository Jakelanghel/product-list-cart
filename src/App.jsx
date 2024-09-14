import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";

import { useState } from "react";
import { GlobalStyles } from "./shared/Global";
import { useOverflow } from "./hooks/useOverflow";
import { renderConfirmation } from "./util/renderConfirmation";

function App() {
  const [cartState, setCartState] = useState({});
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const renderedConfirmation = renderConfirmation(
    orderConfirmed,
    cartState,
    setCartState,
    setOrderConfirmed
  );

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
