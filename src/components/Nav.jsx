import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
export function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger button */}
      <button
        className="lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100"
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div
        className={`${isMobileMenuShown === false && "hidden"} w-full lg:block lg:w-auto`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 rounded-lg p-4 lg:bg-transparent lg:border-none">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`rounded cursor-pointer py-2 px-3 lg:hover:bg-transparent lg:hover:text-blue-500 ${i === 0 
                  ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" 
                  : "hover:bg-gray-100"} 
                  ${(i===3 || i===4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div className="fixed bottom-4 left-4 lg:static lg:mr-8 btn-press-anim">
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
