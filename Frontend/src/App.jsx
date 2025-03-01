import "./App.css";
import ListItems from "./pages/ListItems";
import AddNewItem from "./pages/AddNewItem";
import Checkout from "./pages/Checkout";

import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";

function App() {
  const [checkoutItems, setCheckoutItems] = useState([]);
  // when app loads check if localStorage contains checkout items array , if it doesnt exist then create one

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
        <Route path="/add-item" element={<AddNewItem />} />
      </Routes>
    </div>
  );
}

export default App;
