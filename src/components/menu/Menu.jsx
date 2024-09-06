import data from "./data/data.json";
import Item from "../../components/item/Item";
import useScreenSize from "../../hooks/useScreenSize";
import { StyledMenu } from "./Menu.Styled";
import PropTypes from "prop-types";

const Menu = (props) => {
  const screenSize = useScreenSize();
  const { cartState, setCartState } = props;

  const MenuItems = data.map((item, i) => (
    <Item
      key={i}
      name={item.name}
      images={item.image}
      category={item.category}
      price={item.price}
      screenSize={screenSize}
      cartState={cartState}
      setCartState={setCartState}
    />
  ));

  return (
    <StyledMenu>
      <h1>Desserts</h1>
      {MenuItems}
    </StyledMenu>
  );
};

Menu.propTypes = {
  cartState: PropTypes.object.isRequired,
  setCartState: PropTypes.func.isRequired,
};

export default Menu;
