import PropTypes from "prop-types";
import { imgObj } from "../../constant/images";
import { StyledItem } from "./Item.Styled";

const Item = (props) => {
  const { name, images, category, price, screenSize, cartState, setCartState } =
    props;
  const formatToDollar = (amount) => amount.toFixed(2);
  const itemsArray = Object.keys(cartState);

  const quantity = cartState[name] ? cartState[name] : 0;

  const menuItemImg =
    screenSize === "mobile"
      ? images.mobile
      : screenSize === "tablet"
      ? images.tablet
      : images.desktop;

  const setActive = () => {
    setCartState((oldState) => {
      return { ...oldState, [name]: 1 };
    });
  };
  const increaseQuantity = () => {
    setCartState((oldState) => {
      for (const item in oldState) {
        if (item == name) {
          return { ...oldState, [name]: oldState[name] + 1 };
        }
      }
    });
  };
  const decreaseQuantity = () => {
    setCartState((oldState) => {
      for (const item in oldState) {
        if (item == name) {
          return { ...oldState, [name]: oldState[name] - 1 };
        }
      }
    });
  };

  // console.log(cartState);

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
        <p className="quantity">{cartState[name]}</p>
        <button className="active-btns" onClick={increaseQuantity}>
          <img
            src={imgObj.iconIncrementQuantity}
            alt="Increase item quantity"
          />
        </button>
      </div>
    );

  return (
    <StyledItem>
      <div className="container-img">
        <img src={imgObj[menuItemImg]} className="menu-img" alt="Menu Item" />
        {cartBtn}
      </div>

      <div className="container-txt">
        <p className="category">{category}</p>
        <p className="name">{name}</p>
        <p className="price">{`$${formatToDollar(price)}`}</p>
      </div>
    </StyledItem>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  screenSize: PropTypes.string.isRequired,
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
};

export default Item;
