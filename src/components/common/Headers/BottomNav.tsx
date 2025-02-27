// import { CategoryNavigation } from "./CategoryNavigation";
import { Link } from "react-router";
import CategoryNav from "./CategoryNav";

const BottomNav = () => {
  return (
    <div className="hidden md:flex md:items-center w-full py-[20px] px-4 md:px-10 lg:px-40">
      <div className=" w-full flex flex- items-center justify-between">
        <div className="flex items-center gap-4">
          <CategoryNav />
          <Link to={"/track-orders"}>
            <p className="text-sm cursor-pointer">Track orders</p>
          </Link>
          <Link to={"/customer-support"}>
            <p className="text-sm cursor-pointer">Customer Support</p>
          </Link>
          <Link to={"/help"}>
            <p className="text-sm cursor-pointer">Need help</p>
          </Link>
        </div>

        <p>+234-906-725-2273</p>
      </div>
      <hr className="text-[var(--gray)]" />
    </div>
  );
};

export default BottomNav;
