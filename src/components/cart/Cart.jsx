import PropTypes from "prop-types";
import CartItem from "./cart-item/CartItem";
import { StyledCart } from "./cart-item/Cart.Styled";

const Cart = (props) => {
  const { cartState } = props;
  const cartKeys = Object.keys(cartState);

  const RenderCartItems = cartKeys.map((key, i) => {
    return (
      <CartItem
        key={i}
        name={cartState[key].name}
        quantity={cartState[key].quantity}
        price={cartState[key].price}
      />
    );
  });

  return (
    <StyledCart>
      <h2>
        Your Cart <span>({cartKeys.length})</span>
      </h2>
      {RenderCartItems}
    </StyledCart>
  );
};

Cart.propTypes = {
  cartState: PropTypes.object.isRequired,
};

export default Cart;
