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
    <div className="sm:w-[30%] rounded-xs">
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
      </ul>
    </div>
  );
};

export default DashboardMenu;
