import PropTypes from "prop-types";
import CartItem from "./cart-item/CartItem";
import { StyledCart } from "./Cart.Styled";
import { imgObj } from "../../constant/images";

const Cart = (props) => {
  const { cartState } = props;
  const cartKeys = Object.keys(cartState);

  const renderedCart =
    cartKeys.length > 0 ? (
      cartKeys.map((key, i) => {
        return (
          <CartItem
            key={i}
            name={cartState[key].name}
            quantity={cartState[key].quantity}
            price={cartState[key].price}
          />
        );
      })
    ) : (
      <>
        <div className="container-empty-img">
          <img
            src={imgObj.illustrationEmptyCart}
            alt="Cart is empty"
            className="empty-img"
          />
        </div>
        <p className="empty-cart-txt">Your added items will appear here</p>
      </>
    );

  return (
    <StyledCart>
      <h2>
        Your Cart <span>({cartKeys.length})</span>
      </h2>
      {renderedCart}
    </StyledCart>
  );
};

Cart.propTypes = {
  cartState: PropTypes.object.isRequired,
};

export default Cart;
