import "./App.css";
import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";

function App() {
  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <Nav />
      <ShoeDetail />
    </div>
  );
}

export default App;
