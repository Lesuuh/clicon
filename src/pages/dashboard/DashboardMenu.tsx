import {
  BookA,
  Heart,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { NavLink } from "react-router";

const dashboardMenu = [
  { title: "Dashboard", path: "/dashboard/profile", icon: <LayoutDashboard /> },
  { title: "Order History", path: "/dashboard/orders", icon: <BookA /> },
  { title: "Shopping Cart", path: "/dashboard/cart", icon: <ShoppingCart /> },
  { title: "Wishlist", path: "/dashboard/wishlist", icon: <Heart /> },
  { title: "Settings", path: "/dashboard/settings", icon: <Settings /> },
  { title: "Logout", path: "/dashboard", icon: <LogOut /> },
];

const DashboardMenu = () => {
  return (
    <div className="sm:w-[30%] rounded-xs ">
      <ul className="flex flex-col gap-5 text-gray text-[.9rem] shadow-xl  rounded-xs p-4">
        {dashboardMenu.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu.path}
              className="flex items-center gap-2 hover:text-primary cursor-pointer"
            >
              <span> {menu.icon}</span>{" "}
              <span className="hidden sm:block">{menu.title}</span>
            </NavLink>
          </li>
        ))}

        <div className="flex gap-2 ">
          <img
            src="https://avatar.iran.liara.run/public/32"
            alt=""
            className="w-10"
          />
          <div className="flex flex-col">
            <p className="text-[.8rem] font-bold">Kelvin, Gilbert</p>
            <p className="text-[.7rem]">kelvin.gilbert@gmailcom</p>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default DashboardMenu;
