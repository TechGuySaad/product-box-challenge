import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import ItemCard from "../components/ItemCard";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [checkoutItems, setCheckoutItems] = useState([]);

  // This useEffect will run once because there is an empty dependency array
  useEffect(() => {
    const fetchItems = async () => {
      const url = "http://localhost:3000/items";

      try {
        const response = await axios.get(url);
        // ensuring that response.data only logs when response is available
        // response
        //   ? console.log(response.data)
        //   : console.log("response not available");
        response ? setItems(response.data) : setItems([]); // Updating state with the fetched items
      } catch (error) {
        setError(error);
        console.error("The error at ListItems.jsx api call is :", error);
      }
    };

    const storedItems = JSON.parse(localStorage.getItem("checkoutItems"));
    // console.log(storedItems);
    setCheckoutItems(storedItems);
    fetchItems();
  }, []);

  return (
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
              />
            );
          })
        : console.log("Nothing to display")}
    </div>
  );
};

export default ListItems;
