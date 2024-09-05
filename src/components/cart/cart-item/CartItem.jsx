import { StyledCartItem } from "./CartItem.Styled";
import PropTypes from "prop-types";
import { imgObj } from "../../../constant/images";

const CartItem = (props) => {
  const { name, quantity, price } = props;
  const total = price * quantity;
  return (
    <StyledCartItem>
      <p className="name">{name}</p>
      <div className="details">
        <p>
          {quantity}x @<span>{price}</span> <span>{total}</span>
        </p>
        <button>
          <img src={imgObj.iconRemoveItem} alt="Remove item" />
        </button>
      </div>
    </StyledCartItem>
  );
};
CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartItem;
