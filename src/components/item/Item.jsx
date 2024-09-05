import PropTypes from "prop-types";
import { imgObj } from "../../constant/images";
import { StyledItem } from "./Item.Styled";
import CartBtn from "./cart-btn/CartBtn";

const Item = (props) => {
  const { name, images, category, price, screenSize, cartState, setCartState } =
    props;

  const formatToDollar = (amount) => amount.toFixed(2);
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

  return (
    <StyledItem>
      <div className="container-img">
        <img
          src={imgObj[menuItemImg]}
          className={quantity > 0 ? "menu-img active" : "menu-img"}
          alt="Menu Item"
        />
        <CartBtn
          setActive={setActive}
          setCartState={setCartState}
          cartState={cartState}
          imgObj={imgObj}
          name={name}
          quantity={quantity}
        />
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
