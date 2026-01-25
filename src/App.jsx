import "./App.css";
import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { Sidebar } from "./components/SIdebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <Nav onClickShoppingBtn = {() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST}/>
      <Sidebar isOpen={isSidebarOpen} 
        onClickClose={() => {setIsSidebarOpen(false)}}
      />
    </div>
  );
}

export default App;
