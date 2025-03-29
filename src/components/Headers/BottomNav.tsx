// import { CategoryNavigation } from "./CategoryNavigation";
import { Link } from "react-router";
import CategoryNav from "./CategoryNav";

const BottomNav = () => {
  return (
    <div className="hidden md:flex md:items-center w-full py-[20px] bg-white px-5 md:px-20 mx-auto max-w-[1400px]">
      <div className=" w-full flex flex- items-center justify-between">
        <div className="flex items-center gap-4">
          <CategoryNav />
          <Link to={"/track-orders"} className="flex items-center">
            <img src="/icons/MapPinLine.svg" alt="" className="w-5" />
            <p className="text-sm cursor-pointer ml-1">Track orders</p>
          </Link>
          <Link to={"/customer-support"} className="flex items-center">
            <img src="/icons/Headphones.svg" alt="" className="w-5" />
            <p className="text-sm cursor-pointer ml-1">Customer Support</p>
          </Link>
          <Link to={"/help"} className="flex items-center">
            <img src="/icons/Info.svg" alt="" className="w-5" />
            <p className="text-sm cursor-pointer ml-1">Need help</p>
          </Link>
        </div>

        <div className="flex items-center text-sm">
          <img src="/icons/PhoneCall.svg" alt="" className="mr-2  w-5" />
          <p>+234-906-725-2273</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
