import { StyledCart } from "./Cart.Styled";
import { imgObj } from "../../constant/images";

const EmptyCart = () => {
  return (
    <StyledCart>
      <div className="container-img-empty">
        <img src={imgObj.illustrationEmptyCart} alt="Cart is empty" />
      </div>
      <p className="empty-cart-txt">Your added items will appear here</p>
    </StyledCart>
  );
};

export default EmptyCart;
