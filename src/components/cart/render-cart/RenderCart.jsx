import CartItem from "../../../shared/cart-item/CartItem";
import { imgObj } from "../../../constant/images";
import PropTypes from "prop-types";
import { StyledButton } from "../../../shared/btn/Button.Styled";
import { getCartTotal } from "../../util/getCartTotal";

const RenderCart = (props) => {
  const { cartKeys, cartState, setCartState, removeItem, confirmOrder } = props;
  const cartTotal = getCartTotal(cartState);

  if (cartKeys.length > 0) {
    const cartItems = cartKeys.map((key, i) => {
      return (
        <CartItem
          key={i}
          name={cartState[key].name}
          quantity={cartState[key].quantity}
          price={cartState[key].price}
          setCartState={setCartState}
          removeItem={removeItem}
        />
      );
    });
    return (
      <div className="full-cart">
        {cartItems}
        <p className="order-total-txt">
          Order Total
          <span className="order-total-dollar">${cartTotal}</span>
        </p>
        <div className="container-carbon-neutral">
          <img src={imgObj.iconCarbonNeutral} alt="" className="carbon-img" />
          <p className="carbon-neutral-txt">
            This is a carbon-neutral delivery
          </p>
        </div>
        <StyledButton onClick={confirmOrder}>Confirm Order</StyledButton>
      </div>
    );
  } else {
    return (
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
  }
};

RenderCart.propTypes = {
  cartKeys: PropTypes.array.isRequired,
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  confirmOrder: PropTypes.func.isRequired,
};

export default RenderCart;
