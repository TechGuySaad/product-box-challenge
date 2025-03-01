import "./App.css";
import ListItems from "./pages/ListItems";
import AddNewItem from "./pages/AddNewItem";
import Checkout from "./pages/Checkout";

import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  // when app loads check if localStorage contains checkout items array , if it doesnt exist then create one
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

    fetchItems();
  }, []);
  console.log(items);
  useEffect(() => {
    if (!localStorage.getItem("checkoutItems")) {
      localStorage.setItem("checkoutItems", JSON.stringify([]));
    } else {
      setCheckoutItems(JSON.parse(localStorage.getItem("checkoutItems")));
    }
  }, []);

  return (
    <div className="app-container  w-full h-screen ">
      <NavBar checkoutItemsLength={checkoutItems.length} />
      <Routes>
        <Route
          path="/"
          element={
            <ListItems
              checkoutItems={checkoutItems}
              setCheckoutItems={setCheckoutItems}
              items={items}
              setItems={setItems}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              checkoutItems={checkoutItems}
              setCheckoutItems={setCheckoutItems}
            />
          }
        />
        <Route
          path="/add-item"
          element={<AddNewItem />}
          items={items}
          setItems={setItems}
        />
      </Routes>
    </div>
  );
}

export default App;
