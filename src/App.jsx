import "./App.css";
import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
import { NewArrivalSection } from "./components/NewArrivalSection";

function App() {
  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <Nav />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST}/>
    </div>
  );
}

export default App;
