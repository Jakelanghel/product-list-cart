import PropTypes from "prop-types";
import CartItem from "./cart-item/CartItem";
import { StyledCart } from "./Cart.Styled";
import { imgObj } from "../../constant/images";
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

  return (
    <StyledCart>
      <h2>
        Your Cart <span>({cartKeys.length})</span>
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
