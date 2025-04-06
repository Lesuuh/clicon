import { useAuthStore } from "@/store/authStore";
import {
  BookA,
  Heart,
  LayoutDashboard,
  LogOut,
  Settings,
  // ShoppingCart,
} from "lucide-react";
import { NavLink, useLocation } from "react-router";

const dashboardMenu = [
  { title: "Dashboard", path: "/profile", icon: <LayoutDashboard /> },
  { title: "Order History", path: "/orders", icon: <BookA /> },
  // { title: "Shopping Cart", path: "/cart", icon: <ShoppingCart /> },
  { title: "Wishlist", path: "/wishlist", icon: <Heart /> },
  { title: "Settings", path: "/settings", icon: <Settings /> },
  { title: "Logout", path: "/dashboard", icon: <LogOut />, action: true },
];

const DashboardMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  const logout = useAuthStore((state) => state.logOut);

  return (
    <div className="sm:w-[30%] rounded-xs bg-white">
      <ul className="flex flex-col items-center sm:items-start gap-3 text-gray text-[.9rem] shadow-lg py-5  rounded-xs border border-gray-200 ">
        {dashboardMenu.map((menu, index) => (
          <li key={index} className="w-full">
            {menu.action ? (
              <button
                onClick={() => logout()}
                className="flex items-center gap-2 w-full text-left hover:text-primary cursor-pointer py-2 px-4"
              >
                <span>{menu.icon}</span>
                <span className="hidden sm:block">{menu.title}</span>
              </button>
            ) : (
              <NavLink
                to={menu.path}
                className={`${
                  currentPath === menu.path.split("/").pop()
                    ? "bg-primary hover:text-white w-full text-white"
                    : ""
                } flex items-center gap-2 hover:text-primary cursor-pointer py-2 px-4`}
              >
                <span>{menu.icon}</span>
                <span className="hidden sm:block">{menu.title}</span>
              </NavLink>
            )}
          </li>
        ))}

        <div className="flex gap-2 px-4">
          <img
            src="https://avatar.iran.liara.run/public/32"
            alt=""
            className="w-10"
          />
          <div className="sm:flex flex-col hidden ">
            <p className="text-[.8rem] font-bold">Kelvin, Gilbert</p>
            <p className="text-[.7rem]">kelvin.gilbert@gmailcom</p>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default DashboardMenu;
