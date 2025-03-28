// import { CategoryNavigation } from "./CategoryNavigation";
import { Link } from "react-router";
import CategoryNav from "./CategoryNav";

const BottomNav = () => {
  return (
    <div className="hidden md:flex md:items-center w-full py-[20px] px-4 md:px-10 lg:px-40">
      <div className=" w-full flex flex- items-center justify-between">
        <div className="flex items-center gap-4">
          <CategoryNav />
          <Link to={"/track-orders"} className="flex items-center">
            <img src="/public//MapPinLine.svg" alt="" />
            <p className="text-sm cursor-pointer ml-1">Track orders</p>
          </Link>
          <Link to={"/customer-support"} className="flex items-center">
            <img src="/public/Headphones.svg" alt="" />
            <p className="text-sm cursor-pointer ml-1">Customer Support</p>
          </Link>
          <Link to={"/help"} className="flex items-center">
            <img src="/public/Info.svg" alt="" />
            <p className="text-sm cursor-pointer ml-1">Need help</p>
          </Link>
        </div>

        <p className="flex items-center">
          <img src="/public/PhoneCall.svg" alt="" className="mr-2" />
          +234-906-725-2273
        </p>
      </div>
    </div>
  );
};

export default BottomNav;
