import PropTypes from "prop-types";
import { StyledCart } from "./Cart.Styled";
import RenderCart from "./render-cart/RenderCart";

const Cart = (props) => {
  const { cartState, setCartState } = props;
  const cartKeys = Object.keys(cartState);

  const removeItem = (name) => {
    setCartState((oldState) => {
      let newState = { ...oldState };
      delete newState[name];
      return newState;
    });
  };

  let totalItem = 0;
  for (let key in cartState) {
    totalItem += cartState[key].quantity;
  }

  return (
    <StyledCart>
      <h2>
        Your Cart <span>({totalItem})</span>
      </h2>
      <RenderCart
        cartKeys={cartKeys}
        cartState={cartState}
        setCartState={setCartState}
        removeItem={removeItem}
      />
    </StyledCart>
  );
};

Cart.propTypes = {
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
};

export default Cart;
