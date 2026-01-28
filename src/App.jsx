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
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0])
  const [cartItems, setCartItems] = useState([])

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

  const addToCart = (product, qty, size) => {   
    if (qty && size) {
      const updatedCartItems = [...cartItems]
      const exsitingItemIndex = cartItems.findIndex (item => item.product.id === product.id)      
      if (exsitingItemIndex > -1) {
        updatedCartItems[exsitingItemIndex].qty = qty
        updatedCartItems[exsitingItemIndex].size = size        
      } else {
        updatedCartItems.push({product, qty, size})
      }
            
      setCartItems(updatedCartItems)
    }    
  }

  const removeFormCart = (productId) => {
    const updatedCartItems = [...cartItems]
    const exsitingItemIndex = cartItems.findIndex (item => item.product.id === productId)

    updatedCartItems.splice(exsitingItemIndex, 1)
    setCartItems(updatedCartItems)
  }

  return (
    <div className="p-10 xl:px-24 animate-fadeIn dark:bg-night">
      <Nav onClickShoppingBtn = {() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalSection 
        items={SHOE_LIST}
        onClickCard={setCurrentShoe}
      />
      <Sidebar isOpen={isSidebarOpen} 
        onClickClose={() => {setIsSidebarOpen(false)}}
      >
        <Cart cartItems={cartItems} onClickTrash={removeFormCart} />
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
