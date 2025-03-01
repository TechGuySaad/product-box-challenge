import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  // This useEffect will run once because there is an empty dependency array
  useEffect(() => {
    const fetchQuote = async () => {
      const url = "http://localhost:3000/items";

      try {
        const response = await axios.get(url);
        // ensuring that response.data only logs when response is available
        console.log(response ?? response.data);
        // setItems(); // Updating state with the fetched items
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div>
      <p>items</p>
    </div>
  );
};

export default ListItems;
