import "./App.css";
import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { Sidebar } from "./components/SIdebar";
import { CartItem } from "./components/CartItem";
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
      >
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[1]} />
        <CartItem item={SHOE_LIST[2]} />
        <CartItem item={SHOE_LIST[3]} />
      </Sidebar>
    </div>
  );
}

export default App;
