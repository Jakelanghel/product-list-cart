import PropTypes from "prop-types";
import { imgObj } from "../../constant/images";

const Item = (props) => {
  const { name, images, category, price, screenSize } = props;
  const menuItemImg =
    screenSize === "mobile"
      ? images.mobile
      : screenSize === "tablet"
      ? images.tablet
      : images.desktop;
  console.log(screenSize);

  return (
    <div>
      <div className="container-img">
        <img src={imgObj[menuItemImg]} alt="Menu Item" />
        <button>
          <img src={imgObj.iconAddToCart} alt="" />
          Add to Cart
        </button>
      </div>

      <div className="container-txt">
        <p>{category}</p>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
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
