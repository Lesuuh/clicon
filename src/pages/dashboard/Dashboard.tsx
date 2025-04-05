import AirPlane from "@/components/icons/AirPlane";
import Box from "@/components/icons/Box";
import Paper from "@/components/icons/Paper";
import { Button } from "@/components/ui/button";
import {
  BookA,
  Heart,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingCart,
} from "lucide-react";

const Dashboard = () => {
  const dashboardMenu = [
    { title: "Dashboard", path: "/dashboard", icon: <LayoutDashboard /> },
    { title: "Order History", path: "/dashboard", icon: <BookA /> },

    { title: "Shopping Cart", path: "/dashboard", icon: <ShoppingCart /> },
    { title: "Wishlist", path: "/dashboard", icon: <Heart /> },
    { title: "Settings", path: "/dashboard", icon: <Settings /> },
    { title: "Logout", path: "/dashboard", icon: <LogOut /> },
  ];

  return (
    <section className="my-10 mx-auto w-full max-w-[1400px] px-5 md:px-20">
      <div className="flex gap-10">
        <div className="">
          <ul className="flex flex-col gap-5 text-gray text-[.9rem] shadow-xl  rounded-xs p-4">
            {dashboardMenu.map((menu) => (
              <li className="flex items-center gap-2">
                {menu.icon} {menu.title}
              </li>
            ))}
          </ul>
        </div>
        {/* right */}
        <div>
          <div>
            <h2 className="text-[1.5rem] font-semibold mt-10">Hello, Kelvin</h2>
            <p>
              From your account dashboard. you can easily check & view your
              Recent Orders, manage your Shipping and Billing Addresses and edit
              your Password and Account Details.
            </p>
          </div>
          <div>
            <div>
              <h2>ACCOUNT INFO</h2>
              <div>
                <div>
                  <img src="" alt="" />
                  <div>
                    <p>Kelvin, Gilbert</p>
                    <p>Dhaka-1207, Bangladash</p>
                  </div>
                </div>
                <p>
                  Email: <span>kelvin.gilbert@gmailcom</span>
                </p>
                <p>
                  Phone: <span>0906712453</span>
                </p>
                <Button>EDIT ACCOUNT</Button>
              </div>
            </div>
            <div>
              <h2>BILLING ADDRESS</h2>
              <div>
                <p>Kelvin, Gilbert</p>
                <p>
                  East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                  1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                </p>

                <p>
                  Email: <span>kelvin.gilbert@gmailcom</span>
                </p>
                <p>
                  Phone: <span>0906712453</span>
                </p>
                <Button>EDIT ACCOUNT</Button>
              </div>
            </div>
            <div>
              <div className="bg-[#EAF6FE]">
                <div>
                  <AirPlane className="w-10" />
                </div>
                <div>
                  <h3>154</h3>
                  <p>Total orders</p>
                </div>
              </div>
              <div className="bg-[#FFF3EB]">
                <div>
                  <Paper className="w-10" />
                </div>
                <div>
                  <h3>154</h3>
                  <p>Pending orders</p>
                </div>
              </div>
              <div className="bg-[#EAF7E9]">
                <div>
                  <Box className="w-10" />
                </div>
                <div>
                  <h3>154</h3>
                  <p>Completed orders</p>
                </div>
              </div>
            </div>
          </div>
          {/* order history */}
          <div>
            <div>
              <img src="/images/04.png" alt="" />
              <div>
                <div>
                  <p>2000mAh Dual Output Fast charging Portable Powerbank</p>
                  <p>Order 162887278</p>
                </div>
                <div>
                  <p>Delivered</p>
                  <p>On 13-02-2024</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/04.png" alt="" />
              <div>
                <div>
                  <p>2000mAh Dual Output Fast charging Portable Powerbank</p>
                  <p>Order 162887278</p>
                </div>
                <div>
                  <p>Delivered</p>
                  <p>On 13-02-2024</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/04.png" alt="" />
              <div>
                <div>
                  <p>2000mAh Dual Output Fast charging Portable Powerbank</p>
                  <p>Order 162887278</p>
                </div>
                <div>
                  <p>Delivered</p>
                  <p>On 13-02-2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
