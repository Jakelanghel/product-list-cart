import PropTypes from "prop-types";

const CartBtn = (props) => {
  const { setActive, setCartState, cartState, imgObj, name, quantity } = props;

  const increaseQuantity = () => {
    setCartState((oldState) => {
      for (const item in oldState) {
        if (item == name) {
          return {
            ...oldState,
            [name]: {
              ...oldState[name],
              quantity: oldState[name].quantity + 1,
            },
          };
        }
      }
    });
  };
  const decreaseQuantity = () => {
    setCartState((oldState) => {
      for (const item in oldState) {
        if (item == name) {
          return {
            ...oldState,
            [name]: {
              ...oldState[name],
              quantity: oldState[name].quantity - 1,
            },
          };
        }
      }
    });
  };

  const cartBtn =
    quantity === 0 ? (
      <button className="cart-btn" onClick={setActive}>
        <img src={imgObj.iconAddToCart} alt="" />
        Add to Cart
      </button>
    ) : (
      <div className="cart-btn-active">
        <button className="active-btns" onClick={decreaseQuantity}>
          <img
            src={imgObj.iconDecrementQuantity}
            alt="Decrease item quantity"
          />
        </button>
        <p className="quantity">{cartState[name].quantity}</p>
        <button className="active-btns" onClick={increaseQuantity}>
          <img
            src={imgObj.iconIncrementQuantity}
            alt="Increase item quantity"
          />
        </button>
      </div>
    );

  return cartBtn;
};

CartBtn.propTypes = {
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  imgObj: PropTypes.object.isRequired,
};

export default CartBtn;
