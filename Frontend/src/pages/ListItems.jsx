import React from "react";

import ItemCard from "../components/ItemCard";

const ListItems = ({ checkoutItems, setCheckoutItems, items, setItems }) => {
  return (
    <>
      <h1
        style={{ textAlign: "center", fontSize: "4rem", marginBottom: "10px" }}
      >
        All items
      </h1>
      <div className="flex flex-wrap gap-x-4 gap-y-5  justify-center">
        {items
          ? items.map((item) => {
              return (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.img}
                  setCheckoutItems={setCheckoutItems}
                  checkoutItems={checkoutItems}
                  // setItems={setItems}
                />
              );
            })
          : console.log("Nothing to display")}
      </div>
    </>
  );
};

export default ListItems;
