import "./App.css";
import ListItems from "./pages/ListItems";
import AddNewItem from "./pages/AddNewItem";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router-dom";

function App() {
  // const [checkoutItems, setCheckoutItems] = useState([]);
  // when app loads check if localStorage contains checkout items array , if it doesnt exist then create one
  if (!localStorage.getItem("checkoutItems")) {
    localStorage.setItem("checkoutItems", JSON.stringify([]));
  }
  return (
    <div className="app-container  w-full h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<ListItems />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/add-item" element={<AddNewItem />} />
      </Routes>
    </div>
  );
}

export default App;
