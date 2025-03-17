import { IoMenu } from "react-icons/io5";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { Link } from "react-router";

interface MiddleNavProps {
  navState: boolean;
  setNavState: (state: boolean) => void;
}

const MiddleNav = ({ navState, setNavState }: MiddleNavProps) => {
  const handleNavOpen = () => {
    if (navState === false) setNavState(true);
    console.log("red")
  };
  return (
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
          <img src="icons/cartIcon.png" alt="cart-icon" className="w-5" />
          <span className="font-normal text-xs bg-white px-1 rounded-full text-[var(--secondary)] absolute -top-5 -right-1 transform translate-y-1/2">
            2
          </span>
        </Link>
        <Link to={"/wishlist"}>
          <img src="icons/Heart.png" alt="heart-icon/wishlist" className="w-5" />
        </Link>
        <Link to={"/profile"}>
          <img src="icons/UserIcon.png" alt="user-icon" className="w-5" />
        </Link>
      </div>
    </div>
  );
};

export default MiddleNav;
