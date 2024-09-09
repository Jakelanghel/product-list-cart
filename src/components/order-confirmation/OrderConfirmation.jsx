import { imgObj } from "../../constant/images";
import PropTypes from "prop-types";
import CartItem from "../../shared/cart-item/CartItem";
import { StyledOrderConfirmation } from "./OrderConfirmation.Styled";
import { StyledBackDrop } from "../back-drop/BackDrop.Styled";
import { StyledButton } from "../../shared/btn/Button.Styled";
const OrderConfirmation = (props) => {
  const { cartState, setCartState, orderConfirmed } = props;

  const cartKeys = Object.keys(cartState);
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
        <div className="container-header">
          <h3>Order Confirmed</h3>
          <p>We hope you enjoy your food!</p>
        </div>

        <div className="container-receipt">{renderedOrderedItems}</div>
        <StyledButton>Start New Order</StyledButton>
      </StyledOrderConfirmation>
    </StyledBackDrop>
  );
};

OrderConfirmation.propTypes = {
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
  orderConfirmed: PropTypes.bool.isRequired,
};

export default OrderConfirmation;
