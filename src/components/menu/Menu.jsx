import PropTypes from "prop-types";
import data from "./data/data.json";

import { useScreenSize } from "../../hooks/useScreenSize";
import { StyledMenu } from "./Menu.Styled";
import renderMenuItems from "./data/renderMenuItems";

const Menu = (props) => {
  const screenSize = useScreenSize();
  const { cartState, setCartState } = props;

  const renderedMenuItems = renderMenuItems(
    data,
    cartState,
    screenSize,
    setCartState
  );

  return (
    <div>
      <h1>Desserts</h1>

      <StyledMenu>{renderedMenuItems}</StyledMenu>
    </div>
  );
};

Menu.propTypes = {
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
};

export default Menu;
