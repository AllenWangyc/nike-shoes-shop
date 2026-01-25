import "./App.css";
import { Card } from "./components/Card";
import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";

function App() {
  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      {/* <Nav />
      <ShoeDetail /> */}
      <Card item={SHOE_LIST[0]} />
    </div>
  );
}

export default App;
