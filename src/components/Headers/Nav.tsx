import { useState } from "react";
import TopNav from "./TopNav";
import MiddleNav from "./MiddleNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [navState, setNavState] = useState(false);

  return (
    <nav className=" relative bg-secondary-700 px-5 md:px-20 mx-auto max-w-[1400px]">
      <div className="hidden md:block">
        <TopNav />
      </div>
      <hr className="text-gray" />
      <MiddleNav navState={navState} setNavState={setNavState} />
      <MobileNav navState={navState} setNavState={setNavState} />
    </nav>
  );
};

export default Nav;
