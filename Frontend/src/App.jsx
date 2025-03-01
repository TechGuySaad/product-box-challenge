import "./App.css";
import ListItems from "./pages/ListItems";
import AddNewItem from "./pages/AddNewItem";
function App() {
  return (
    <div className="app-container  w-full h-screen">
      <div>NavBar</div>
      {/* <ListItems /> */}
      <AddNewItem />
    </div>
  );
}

export default App;
