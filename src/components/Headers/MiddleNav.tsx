import { IoMenu } from "react-icons/io5";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { Link } from "react-router";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import { useEffect } from "react";

interface MiddleNavProps {
  navState: boolean;
  setNavState: (state: boolean) => void;
}

const MiddleNav = ({ navState, setNavState }: MiddleNavProps) => {
  const handleNavOpen = () => {
    if (navState === false) setNavState(true);
    console.log("red");
  };

  const user = useAuthStore((state) => state.user);
  const cart = useCartStore((state) => state.cart);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartQuantity = user ? totalQuantity : 0;

  const userData = useAuthStore((state) => state.userData);
  return (
    <div className="flex justify-between items-center py-[15px]">
      <div className="flex items-center">
        <IoMenu
          onClick={handleNavOpen}
          size={25}
          className="mr-2 text-white md:hidden cursor-pointer"
        />
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <SearchBar />
      <div className="flex items-center space-x-4">
        <Link to={"/cart"} className="relative">
          <img src="icons/cartIcon.png" alt="cart-icon" className="lg:w-5" />
          <span className="font-normal text-xs bg-white px-1 rounded-full text-secondary absolute -top-5 -right-1 transform translate-y-1/2">
            {cartQuantity}
          </span>
        </Link>
        <Link to={"/wishlist"}>
          <img
            src="icons/Heart.png"
            alt="heart-icon/wishlist"
            className="lg:w-5"
          />
        </Link>
        <Link to={"/profile"} className="flex items-center">
          <img src="icons/UserIcon.png" alt="user-icon" className="lg:w-5" />
          {userData && userData.fullName ? (
            <span className="ml-2 text-[.8rem] text-white hidden md:flex">
              {userData.fullName.split(" ")[0]}
            </span>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};

export default MiddleNav;
