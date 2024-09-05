import { GlobalStyles } from "./shared/Global";
import Menu from "./components/Menu";
import { useState } from "react";
import Cart from "./components/cart/Cart";

function App() {
  const [cartState, setCartState] = useState({});
  const RenderCart =
    Object.keys(cartState).length == 0 ? null : <Cart cartState={cartState} />;
  return (
    <>
      <GlobalStyles />
      <Menu cartState={cartState} setCartState={setCartState} />
      {RenderCart}
    </>
  );
}

export default App;
