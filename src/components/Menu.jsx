import data from "../data/data.json";
import Item from "./item/Item";
import useScreenSize from "../hooks/useScreenSize";
import { StyledMenu } from "./menu/Menu.Styled";

const Menu = () => {
  const screenSize = useScreenSize();

  const MenuItems = data.map((item, i) => (
    <Item
      key={i}
      name={item.name}
      images={item.image}
      category={item.category}
      price={item.price}
      screenSize={screenSize}
    />
  ));

  return (
    <StyledMenu>
      <h1>Desserts</h1>
      {MenuItems}
    </StyledMenu>
  );
};

export default Menu;
