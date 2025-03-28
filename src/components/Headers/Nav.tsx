import { useState } from "react";
import TopNav from "./TopNav";
import MiddleNav from "./MiddleNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [navState, setNavState] = useState(false);

  return (
    <nav className="bg-secondary-700 relative">
      <div className="hidden md:block px-4 md:px-10 lg:px-40">
        <TopNav />
      </div>
      <hr className="text-gray" />
      <MiddleNav navState={navState} setNavState={setNavState} />
      <MobileNav navState={navState} setNavState={setNavState} />
    </nav>
  );
};

export default Nav;
