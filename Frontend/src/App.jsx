import "./App.css";
import ListItems from "./pages/ListItems";
import AddNewItem from "./pages/AddNewItem";
import Checkout from "./pages/Checkout";

function App() {
  // const [checkoutItems, setCheckoutItems] = useState([]);
  // when app loads check if localStorage contains checkout items array , if it doesnt exist then create one
  if (!localStorage.getItem("checkoutItems")) {
    localStorage.setItem("checkoutItems", JSON.stringify([]));
  }
  return (
    <div className="app-container  w-full h-screen">
      <div>NavBar</div>
      {/* <ListItems /> */}
      {/* <AddNewItem /> */}
      {/* <Checkout /> */}
    </div>
  );
}

export default App;
