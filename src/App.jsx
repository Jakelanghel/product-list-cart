import { GlobalStyles } from "./shared/Global";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Cart from "./components/cart/Cart";

function App() {
  const [cartState, setCartState] = useState({});
  console.log(cartState);

  return (
    <>
      <GlobalStyles />
      <Menu cartState={cartState} setCartState={setCartState} />
      <Cart cartState={cartState} />
    </>
  );
}

export default App;
