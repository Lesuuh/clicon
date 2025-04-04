import BottomNav from "./BottomNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="w-full ">
      <Nav />
      <BottomNav />
      <div className="w-full h-px bg-gray-50"></div>
    </div>
  );
};

export default Header;
