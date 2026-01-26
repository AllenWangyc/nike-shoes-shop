import "./App.css";
import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { Sidebar } from "./components/SIdebar";
import { Cart } from "./components/Cart";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
    return {
      product: shoe,
      qty: 1,
      size: 44
    }
  })

  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <Nav onClickShoppingBtn = {() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST}/>
      <Sidebar isOpen={isSidebarOpen} 
        onClickClose={() => {setIsSidebarOpen(false)}}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
    </div>
  );
}

export default App;
