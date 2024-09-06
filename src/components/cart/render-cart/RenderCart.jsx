import CartItem from "../cart-item/CartItem";
import { imgObj } from "../../../constant/images";
import PropTypes from "prop-types";

const RenderCart = (props) => {
  const { cartKeys, cartState, setCartState, removeItem } = props;

  if (cartKeys.length > 0) {
    const total = Object.values(cartState).reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    console.log(Object.values(cartState));

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
      <div>
        {cartItems}
        <p>
          Order Total <span>{total}</span>
        </p>
        <div className="container-carbon-msg">
          <img src={imgObj.iconCarbonNeutral} alt="" />
          <p>This is a carbon-neutral delivery</p>
        </div>
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
