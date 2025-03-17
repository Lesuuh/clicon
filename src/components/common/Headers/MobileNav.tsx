import { Link } from "react-router";
import { IoClose, IoWatch } from "react-icons/io5";
import {
  FaComputer,
  FaHeadphones,
  FaComputerMouse,
  FaGamepad,
  FaCamera,
  FaTv,
  FaMobile,
} from "react-icons/fa6";
import { Separator } from "@radix-ui/react-select";
interface MobileNavProps {
  navState: boolean;
  setNavState: (state: boolean) => void;
}

const MobileNav = ({ navState, setNavState }: MobileNavProps) => {
  const categories = [
    { icon: <FaComputer />, name: "Computer & Laptops" },
    { icon: <FaComputerMouse />, name: "Computer Accessories" },
    { icon: <FaMobile />, name: "SmartPhone" },
    { icon: <FaHeadphones />, name: "Headphone" },
    { icon: <FaMobile />, name: "Mobile Accessories" },
    { icon: <FaGamepad />, name: "Gaming Consoles" },
    { icon: <FaCamera />, name: "Camera & Photo" },
    { icon: <FaTv />, name: "TV & Home Appliance" },
    { icon: <IoWatch />, name: "Watches & Accessories" },
    { icon: <FaMobile />, name: "Wearable Technology" },
  ];

  const handleNavClose = () => {
    if (navState === true) setNavState(false);
  };
  return (
    <div>
      {/* ---------------Mobile-------------- */}
      {navState && (
        <div
          className={`h-screen w-[90%] overflow-y-auto pb-4 absolute top-0 left-0 bg-white text-gray-900 p-4 z-10`}
        >
          <div className="flex items-center">
            <IoClose size={25} onClick={handleNavClose} />
            <img src="icons/logoBlack.png" alt="clicon-logo" className="w-25 ml-2" />
          </div>

          <div className="mt-3">
            <h3 className="text-xs font-semibold py-2 text-[var(--primary)]">
              MY CLICON ACCOUNT
            </h3>
            <div className="flex flex-col">
              <Link to="/orders" className="text-sm">
                Orders
              </Link>
              <Link to="/wishlist" className="text-sm">
                Wishlist
              </Link>
            </div>
          </div>

          <Separator className="mt-5 bg-gray-300 h-[1px]" />

          {/* categories */}
          <div className="my-2">
            <h3 className="text-xs font-semibold py-2 text-[var(--primary)]">
              OUR CATEGORIES
            </h3>
            <ul>
              {categories.map((item) => (
                <Link to={item.name} key={item.name}>
                  <li className="text-sm py-1 flex items-center gap-2">
                    {item.icon} {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <Separator className="my-4 bg-gray-200 h-[1px]" />
          <div className="flex flex-col space-y-1">
            <h3 className="text-xs font-semibold py-2 text-[var(--primary)]">
              SERVICES
            </h3>
            <Link to="/customer-support" className="text-sm">
              Customer Support
            </Link>
            <Link to="/contact" className="text-sm">
              Contact us
            </Link>
            <Link to="/help" className="text-sm">
              Need help
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
