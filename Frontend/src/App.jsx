import "./App.css";
import ListItems from "./pages/ListItems";
import AddNewItem from "./pages/AddNewItem";
import Checkout from "./pages/Checkout";
import { useState } from "react";
function App() {
  // const [checkoutItems, setCheckoutItems] = useState([]);
  return (
    <div className="app-container  w-full h-screen">
      <div>NavBar</div>
      {/* <ListItems /> */}
      {/* <AddNewItem /> */}
      <Checkout />
    </div>
  );
}

export default App;
