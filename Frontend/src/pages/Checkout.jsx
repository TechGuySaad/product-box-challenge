import * as React from "react";
import List from "@mui/material/List";
import { useEffect, useState } from "react";

import CheckoutItem from "../components/CheckoutItem";

export default function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState([]);
  useEffect(() => {
    const storageItems = localStorage.getItem("checkoutItems");
    console.log(storageItems);
    const parsedItems = storageItems ? JSON.parse(storageItems) : [];

    setCheckoutItems(parsedItems);
  }, []);

  return (
    <div className="flex flex-wrap checkout-items-container space-y-4 space-x-4  w-full justify-center ">
      {checkoutItems.map((item, index) => {
        return (
          <CheckoutItem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.image}
            checkoutItems={checkoutItems}
            setCheckoutItems={setCheckoutItems}
          />
        );
      })}
    </div>
  );
}
