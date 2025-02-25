import { IoMenu } from "react-icons/io5";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

const Nav = () => {
  return (
    <div className="bg-[var(--secondary-700)] p-4 flex items-center">
      <div className="flex items-center mr-auto">
        <IoMenu size={25} className="mr-2 text-white" />
        <Logo />
      </div>
      <SearchBar />
      <img src="/cartIcon.png" alt="cart-icon" />
      <img src="/Heart.png" alt="heart-icon/wishlist" />
      <img src="/UserIcon.png" alt="user-icon" />
    </div>
  );
};

export default Nav;
