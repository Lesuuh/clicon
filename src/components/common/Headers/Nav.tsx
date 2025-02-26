import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { Link } from "react-router";
import TopHeader from "./TopHeader";
import { IoClose, IoMenu, IoWatch } from "react-icons/io5";
import {
  FaComputer,
  FaHeadphones,
  FaComputerMouse,
  FaGamepad,
  FaCamera,
  FaTv,
  FaMobile,
} from "react-icons/fa6";
import { Separator } from "@radix-ui/react-select";
import { useState } from "react";

const Nav = () => {
  const categories = [
    { icon: <FaComputer />, name: "Computer & Laptops" },
    { icon: <FaComputerMouse />, name: "Computer Accessories" },
    { icon: <FaMobile />, name: "SmartPhone" },
    { icon: <FaHeadphones />, name: "Headphone" },
    { icon: <FaMobile />, name: "Mobile Accessories" },
    { icon: <FaGamepad />, name: "Gaming Consoles" },
    { icon: <FaCamera />, name: "Camera & Photo" },
    { icon: <FaTv />, name: "TV & Home Appliance" },
    { icon: <IoWatch />, name: "Watches & Accessories" },
    { icon: <FaMobile />, name: "Wearable Technology" },
  ];

  const [navState, setNavState] = useState(true);

  const handleNavClose = () => {
    if (navState === true) setNavState(false);
  };
  const handleNavOpen = () => {
    if (navState === false) setNavState(true);
  };

  return (
    <nav className="bg-[var(--secondary-700)] relative">
      {/* onMobile */}
      {navState && (
        <div
          className={`h-screen w-[90%] absolute top-0 left-0 bg-white text-gray-900 p-4 z-10`}
        >
          <div className="flex items-center">
            <IoClose size={25} onClick={handleNavClose} />
            <img src="/logoBlack.png" alt="clicon-logo" className="w-25 ml-2" />
          </div>

          <div className="mt-3">
            <h3 className="text-xs font-semibold py-2 text-[var(--primary)]">
              MY CLICON ACCOUNT
            </h3>
            <div className="flex flex-col">
              <Link to="/orders" className="text-sm">
                Orders
              </Link>
              <Link to="/wishlist" className="text-sm">
                Wishlist
              </Link>
            </div>
          </div>

          <Separator className="mt-5 bg-gray-300 h-[1px]" />

          {/* categories */}
          <div className="my-2">
            <h3 className="text-xs font-semibold py-2 text-[var(--primary)]">
              OUR CATEGORIES
            </h3>
            <ul>
              {categories.map((item) => (
                <Link to={item.name} key={item.name}>
                  <li className="text-sm py-1 flex items-center gap-2">
                    {item.icon} {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <Separator className="my-4 bg-gray-200 h-[1px]" />
          <div className="flex flex-col space-y-1">
            <h3 className="text-xs font-semibold py-2 text-[var(--primary)]">
              SERVICES
            </h3>
            <Link to="/customer-support" className="text-sm">
              Customer Support
            </Link>
            <Link to="/contact" className="text-sm">
              Contact us
            </Link>
          </div>
        </div>
      )}

      <div className=" hidden md:block px-4 md:px-10 lg:px-40">
        <TopHeader />
      </div>

      <hr className="text-[var(--gray)]" />
      <div className="flex justify-between items-center py-[20px] px-4 md:px-10 lg:px-40">
        <div className="flex items-center">
          <IoMenu
            onClick={handleNavOpen}
            size={25}
            className="mr-2 text-white md:hidden cursor-pointer"
          />
          <Logo />
        </div>
        <SearchBar />
        <div className="flex items-center space-x-4">
          <Link to={"/cart"} className="relative">
            <img src="/cartIcon.png" alt="cart-icon" className="w-5" />
            <span className="font-normal text-xs bg-white px-1 rounded-full text-[var(--secondary)] absolute -top-5 -right-1 transform translate-y-1/2">
              2
            </span>
          </Link>
          <Link to={"/wishlist"}>
            <img src="/Heart.png" alt="heart-icon/wishlist" className="w-5" />
          </Link>
          <Link to={"/profile"}>
            <img src="/UserIcon.png" alt="user-icon" className="w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
