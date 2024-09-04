import data from "../data/data.json";
import Item from "./item/Item";
import useScreenSize from "../hooks/useScreenSize";

const Menu = () => {
  console.log(data);
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

  return <div>{MenuItems}</div>;
};

export default Menu;
