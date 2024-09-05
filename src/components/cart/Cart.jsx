import PropTypes from "prop-types";
import CartItem from "./cart-item/CartItem";

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

  return <div>{RenderCartItems}</div>;
};

Cart.propTypes = {
  cartState: PropTypes.object.isRequired,
};

export default Cart;
