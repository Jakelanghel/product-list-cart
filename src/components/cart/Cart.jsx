import PropTypes from "prop-types";
import { StyledCart } from "./Cart.Styled";
import RenderCart from "./render-cart/RenderCart";
import { getCartTotal } from "../../util/getCartTotal";

const Cart = (props) => {
  const { cartState, setCartState, setOrderConfirmed } = props;
  const cartKeys = Object.keys(cartState);

  const removeItem = (name) => {
    setCartState((oldState) => {
      let newState = { ...oldState };
      delete newState[name];
      return newState;
    });
  };

  const confirmOrder = () => {
    setOrderConfirmed((oldState) => !oldState);
  };

  const itemTotal = cartKeys.reduce(
    (total, key) => total + cartState[key].quantity,
    0
  );

  return (
    <StyledCart>
      <h2>
        Your Cart <span>({itemTotal})</span>
      </h2>
      <RenderCart
        cartKeys={cartKeys}
        cartState={cartState}
        setCartState={setCartState}
        removeItem={removeItem}
        confirmOrder={confirmOrder}
      />
    </StyledCart>
  );
};

Cart.propTypes = {
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
  setOrderConfirmed: PropTypes.func,
};

export default Cart;
