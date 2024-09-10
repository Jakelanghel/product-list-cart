import { imgObj } from "../../constant/images";
import PropTypes from "prop-types";
import CartItem from "../../shared/cart-item/CartItem";
import { StyledOrderConfirmation } from "./OrderConfirmation.Styled";
import { StyledBackDrop } from "../back-drop/BackDrop.Styled";
import { StyledButton } from "../../shared/btn/Button.Styled";
import { getCartTotal } from "../util/getCartTotal";

const OrderConfirmation = (props) => {
  const { cartState, setCartState, orderConfirmed, setOrderConfirmed } = props;
  const cartKeys = Object.keys(cartState);
  const cartTotal = getCartTotal(cartState);

  const resetOrder = () => {
    setCartState({});
    setOrderConfirmed(false);
  };

  const renderedOrderedItems = cartKeys.map((key, i) => (
    <CartItem
      key={i}
      name={cartState[key].name}
      quantity={cartState[key].quantity}
      price={cartState[key].price}
      thumbnail={cartState[key].thumbnailImg}
      orderConfirmed={orderConfirmed}
    />
  ));

  return (
    <StyledBackDrop>
      <StyledOrderConfirmation>
        <img src={imgObj.iconOrderConfirmed} alt="" className="confirm-icon" />
        <div className="container-header">
          <h3>Order Confirmed</h3>
          <p className="msg">We hope you enjoy your food!</p>
        </div>

        <div className="container-receipt">
          {renderedOrderedItems}
          <div className="container-total">
            <p className="total-txt">Order Total</p>
            <p className="total-dol">${cartTotal}</p>
          </div>
        </div>

        <div className="container-btn">
          <StyledButton onClick={resetOrder}>Start New Order</StyledButton>
        </div>
      </StyledOrderConfirmation>
    </StyledBackDrop>
  );
};

OrderConfirmation.propTypes = {
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
  orderConfirmed: PropTypes.bool.isRequired,
  setOrderConfirmed: PropTypes.func.isRequired,
};

export default OrderConfirmation;
