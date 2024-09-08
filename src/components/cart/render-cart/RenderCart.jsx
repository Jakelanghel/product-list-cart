import CartItem from "../cart-item/CartItem";
import { imgObj } from "../../../constant/images";
import PropTypes from "prop-types";

const RenderCart = (props) => {
  const { cartKeys, cartState, setCartState, removeItem } = props;

  if (cartKeys.length > 0) {
    const total = Object.values(cartState).reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

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
          <span className="order-total-dollar">${total.toFixed(2)}</span>
        </p>
        <div className="container-carbon-neutral">
          <img src={imgObj.iconCarbonNeutral} alt="" className="carbon-img" />
          <p className="carbon-neutral-txt">
            This is a carbon-neutral delivery
          </p>
        </div>
        <button className="order-confirm-btn">Confirm Order</button>
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
};

export default RenderCart;
