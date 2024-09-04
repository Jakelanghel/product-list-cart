import PropTypes from "prop-types";
import { imgObj } from "../../constant/images";
import { StyledItem } from "./Item.Styled";

const Item = (props) => {
  const { name, images, category, price, screenSize } = props;
  const formatToDollar = (amount) => amount.toFixed(2);

  const menuItemImg =
    screenSize === "mobile"
      ? images.mobile
      : screenSize === "tablet"
      ? images.tablet
      : images.desktop;

  return (
    <StyledItem>
      <div className="container-img">
        <img src={imgObj[menuItemImg]} className="menu-img" alt="Menu Item" />
        <button className="cart-btn">
          <img src={imgObj.iconAddToCart} alt="" />
          Add to Cart
        </button>
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
};

export default Item;
