import { StyledCartItem } from "./CartItem.Styled";
import PropTypes from "prop-types";
import { imgObj } from "../../constant/images";

const CartItem = (props) => {
  const { name, quantity, price, removeItem, thumbnail, orderConfirmed } =
    props;

  const total = price * quantity;

  const renderedCartItem = orderConfirmed ? (
    <StyledCartItem>
      <div className="container-flex-r">
        <div className="container-thumbnail">
          <img
            src={imgObj[thumbnail]}
            alt="thumbnail"
            className="thumbnail-img"
          />
        </div>
        <div className="container-flex-c">
          <p className="name">{name}</p>
          <span className="quantity">{quantity}x</span> @ ${price.toFixed(2)}
        </div>

        <p className="price">
          <span className="total">${total.toFixed(2)}</span>
        </p>
      </div>
    </StyledCartItem>
  ) : (
    <StyledCartItem>
      <p className="name">{name}</p>
      <div className="details">
        <p className="price">
          <span className="quantity">{quantity}x</span> @ ${price.toFixed(2)}
          <span className="total">${total.toFixed(2)}</span>
        </p>
        <button className="remove-btn" onClick={() => removeItem(name)}>
          <img
            src={imgObj.iconRemoveItem}
            alt="Remove item"
            className="remove-img"
          />
        </button>
      </div>
    </StyledCartItem>
  );

  return renderedCartItem;
};
CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  removeItem: PropTypes.func,
  thumbnail: PropTypes.string,
  orderConfirmed: PropTypes.bool,
};

export default CartItem;
