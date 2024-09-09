import { imgObj } from "../../constant/images";
import PropTypes from "prop-types";
import CartItem from "../cart/cart-item/CartItem";
import { StyledOrderConfirmation } from "./OrderConfirmation.Styled";
import { StyledBackDrop } from "../back-drop/BackDrop.Styled";

const OrderConfirmation = (props) => {
  const { cartState, setCartState } = props;

  const cartKeys = Object.keys(cartState);
  const renderedOrderedItems = cartKeys.map((key, i) => (
    <CartItem
      key={i}
      name={cartState[key].name}
      quantity={cartState[key].quantity}
      price={cartState[key].price}
      thumbnail={cartState[key].thumbnail}
    />
  ));

  return (
    <StyledBackDrop>
      <StyledOrderConfirmation>
        <div className="container-header">
          <img src={imgObj.OrderConfirmation} alt="" />
          <h3>Order Confirmed</h3>
          <p>We hope you enjoy your food!</p>
        </div>

        <div className="container-receipt">{renderedOrderedItems}</div>
      </StyledOrderConfirmation>
    </StyledBackDrop>
  );
};

OrderConfirmation.propTypes = {
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
};

export default OrderConfirmation;
