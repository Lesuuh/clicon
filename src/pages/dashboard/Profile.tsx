import AirPlane from "@/components/icons/AirPlane";
import Box from "@/components/icons/Box";
import Paper from "@/components/icons/Paper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/store/authStore";

const recentOrders = [
  {
    id: "162887278",
    product: "2000mAh Dual Output Fast charging Portable Powerbank",
    date: "13-02-2024",
    status: "Delivered",
    image: "/images/04.png",
  },
];
const Profile = () => {
  const userData = useAuthStore((state) => state.userData);
  console.log(userData);

  const fullName = userData?.displayName || "Guest User";

  const email = userData?.email || "guest@example.com";

  const name = fullName?.split(" ");
  console.log(name);

  return (
    <div className="w-full">
      <div>
        <h2 className="text-[1rem] font-semibold">
          Hello,{" "}
          <span className="text-secondary-500">{name?.[0] || "Guest"}</span>
        </h2>
        <p className="my-2 text-[.7rem] text-gray">
          From your account dashboard. you can easily check & view your
          <span className="text-secondary-500">Recent Orders</span>, manage your
          <span className="text-secondary-500">
            Shipping and Billing Addresses
          </span>{" "}
          and edit your{" "}
          <span className="text-secondary-500">
            Password and Account Details
          </span>
        </p>
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-3  h-auto rounded-xs border-gray-200">
          <h2 className="text-[.8rem]">ACCOUNT INFO</h2>
          <Separator className="w-full my-1 border-t border-gray-300" />
          <div className="my-2 ">
            <div className="flex gap-2 ">
              <img
                src="https://avatar.iran.liara.run/public/32"
                alt=""
                className="w-10"
              />
              <div>
                <p className="text-[.8rem] font-bold">{fullName}</p>
                <p className="text-[.7rem] text-gray">Portharcourt, Nigeria</p>
              </div>
            </div>
            <p className="text-[.7rem] mt-3">
              Email: <span className="text-gray">{email}</span>
            </p>
            <p className="text-[.7rem] mt-1">
              Phone: <span className="text-gray">09067252273</span>
            </p>
            <Button className="text-secondary-500 mt-3" variant={"outline"}>
              EDIT ACCOUNT
            </Button>
          </div>
        </div>
        <div className="border p-3  h-auto rounded-xs border-gray-200">
          <h2 className="text-[.8rem]">BILLING ADDRESS</h2>
          <Separator className="w-full my-1 border-t border-gray-300" />
          <div>
            <p className="text-[.8rem] font-bold">{fullName}</p>
            <p className="text-gray text-[.7rem]">
              No. 234 East West Road Portharcourt
            </p>

            <p className="text-[.7rem] mt-3">
              Email: <span className="text-gray">{email}</span>
            </p>
            <p className="text-[.7rem] mt-1">
              Phone: <span className="text-gray">09067252273</span>
            </p>
            <Button className="text-secondary-500 mt-3" variant={"outline"}>
              EDIT ACCOUNT
            </Button>
          </div>
        </div>
        <div>
          <div className=" flex items-center p-3 gap-3 rounded-xs bg-[#EAF6FE]">
            <div className="bg-white p-2 rounded-xs">
              <AirPlane className="w-10" />
            </div>
            <div>
              <h3 className="font-bold">154</h3>
              <p className="text-[.8rem] text-gray">Total orders</p>
            </div>
          </div>
          <div className="flex items-center p-3 gap-3 rounded-xs bg-[#FFF3EB]">
            <div className="bg-white p-2 rounded-xs">
              <Paper className="w-10" />
            </div>
            <div>
              <h3 className="font-bold">154</h3>
              <p className="text-[.8rem] text-gray">Pending orders</p>
            </div>
          </div>
          <div className="flex items-center p-3 gap-3 rounded-xs bg-[#EAF7E9]">
            <div className="bg-white p-2 rounded-xs">
              <Box className="w-10" />
            </div>
            <div>
              <h3 className="font-bold">154</h3>
              <p className="text-[.8rem] text-gray">Completed orders</p>
            </div>
          </div>
        </div>
      </div>
      {/* order history */}
      <div className="my-10 w-full">
        <h2 className="w-full bg-gray-200 py-1 rounded-xs px-3 text-[.8rem]">
          RECENT ORDERS
        </h2>
        <div className="flex flex-col w-full ">
          {recentOrders.map((order, index) => (
            <div
              key={index}
              className="flex w-full gap-10 p-4 border border-gray-200"
            >
              <img src={order.image} alt="" />
              <div className="flex flex-col justify-between items-start">
                <div>
                  <p className="text-[.8rem]">{order.product}</p>
                  <p className="text-[.7rem] text-gray">Order {order.id}</p>
                </div>
                <div>
                  <span className="bg-green-500 rounded-xs text-white p-1 text-[.6rem]">
                    {order.status}
                  </span>
                  <p className="text-gray text-[.7rem]">On {order.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex w-full gap-10 p-4 border border-gray-200">
            <img src="/images/04.png" alt="" />
            <div className="flex flex-col justify-between items-start">
              <div>
                <p className="text-[.8rem]">
                  2000mAh Dual Output Fast charging Portable Powerbank
                </p>
                <p className="text-[.7rem] text-gray">Order 162887278</p>
              </div>
              <div>
                <span className="bg-green-500 rounded-xs text-white p-1 text-[.6rem]">
                  Delivered
                </span>
                <p className="text-gray text-[.7rem]">On 13-02-2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex w-full gap-10 p-4 border border-gray-200">
            <img src="/images/04.png" alt="" />
            <div className="flex flex-col justify-between items-start">
              <div>
                <p className="text-[.8rem]">
                  2000mAh Dual Output Fast charging Portable Powerbank
                </p>
                <p className="text-[.7rem] text-gray">Order 162887278</p>
              </div>
              <div>
                <span className="bg-green-500 rounded-xs text-white p-1 text-[.6rem]">
                  Delivered
                </span>
                <p className="text-gray text-[.7rem]">On 13-02-2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex w-full gap-10 p-4 border border-gray-200">
            <img src="/images/04.png" alt="" />
            <div className="flex flex-col justify-between items-start">
              <div>
                <p className="text-[.8rem]">
                  2000mAh Dual Output Fast charging Portable Powerbank
                </p>
                <p className="text-[.7rem] text-gray">Order 162887278</p>
              </div>
              <div>
                <span className="bg-green-500 rounded-xs text-white p-1 text-[.6rem]">
                  Delivered
                </span>
                <p className="text-gray text-[.7rem]">On 13-02-2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
