import PropTypes from "prop-types";
import CartItem from "./cart-item/CartItem";
import { StyledCart } from "./Cart.Styled";
import { imgObj } from "../../constant/images";
import RenderCart from "./render-cart/RenderCart";

const Cart = (props) => {
  const { cartState, setCartState } = props;
  const cartKeys = Object.keys(cartState);
  console.log(cartKeys.length);

  const removeItem = (name) => {
    setCartState((oldState) => {
      let newState = { ...oldState };
      delete newState[name];
      return newState;
    });
  };

  // const renderedCart =
  //   cartKeys.length > 0 ? (
  //     cartKeys.map((key, i) => {
  //       return (
  //         <CartItem
  //           key={i}
  //           name={cartState[key].name}
  //           quantity={cartState[key].quantity}
  //           price={cartState[key].price}
  //           setCartState={setCartState}
  //           removeItem={removeItem}
  //         />
  //       );
  //     })
  //   ) : (
  //     <>
  //       <div className="container-empty-img">
  //         <img
  //           src={imgObj.illustrationEmptyCart}
  //           alt="Cart is empty"
  //           className="empty-img"
  //         />
  //       </div>
  //       <p className="empty-cart-txt">Your added items will appear here</p>
  //     </>
  //   );

  return (
    <StyledCart>
      <h2>
        Your Cart <span>({cartKeys.length})</span>
      </h2>
      <RenderCart
        cartKeys={cartKeys}
        cartState={cartState}
        setCartState={setCartState}
        removeItem={removeItem}
      />
    </StyledCart>
  );
};

Cart.propTypes = {
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
};

export default Cart;
