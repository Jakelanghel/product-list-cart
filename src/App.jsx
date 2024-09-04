import { GlobalStyles } from "./shared/Global";
import Menu from "./components/Menu";
import { useState } from "react";
import Cart from "./components/cart/Cart";

function App() {
  const [cartState, setCartState] = useState([]);

  return (
    <>
      <GlobalStyles />
      <Menu />
      <Cart />
    </>
  );
}

export default App;
