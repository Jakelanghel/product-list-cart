import { StyledCartItem } from "./CartItem.Styled";
import PropTypes from "prop-types";
import { imgObj } from "../../../constant/images";

const CartItem = (props) => {
  const { name, quantity, price, removeItem } = props;
  const total = price * quantity;

  return (
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
};
CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItem;
