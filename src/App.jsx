import "./App.css";
import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { Sidebar } from "./components/SIdebar";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";
import { BiMoon, BiSun} from "react-icons/bi"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
    return {
      product: shoe,
      qty: 1,
      size: 44
    }
  })

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if (isDarkMode == "true") {
      window.document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    )
  }

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
      <div className="fixed bottom-4 right-4">
        <button 
          className="bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night cursor-pointer"
          onClick={toggleDarkMode}
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
