import { IoMenu } from "react-icons/io5";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { Link } from "react-router";

const Nav = () => {
  return (
    <div className="bg-[var(--secondary-700)] p-4 flex justify-between items-center">
      <div className="flex items-center">
        <IoMenu size={25} className="mr-2 text-white" />
        <Logo />
      </div>
      <SearchBar />
      <div className="flex items-center space-x-4">
        <Link to={"/cart"}>
          <img src="/cartIcon.png" alt="cart-icon" className="w-5" />
        </Link>
        <Link to={"/wishlist"}>
          <img src="/Heart.png" alt="heart-icon/wishlist" className="w-5" />
        </Link>
        <Link to={"/profile"}>
          <img src="/UserIcon.png" alt="user-icon" className="w-5" />
        </Link>
      </div>{" "}
    </div>
  );
};

export default Nav;
