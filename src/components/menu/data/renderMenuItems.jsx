import Item from "../../item/Item";

const renderMenuItems = (data, cartState, screenSize, setCartState) => {
  return data.map((item, i) => (
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
};

export default renderMenuItems;
