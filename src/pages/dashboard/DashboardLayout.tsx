import { Outlet } from "react-router";
import DashboardMenu from "./DashboardMenu";

const DashboardLayout = () => {
  return (
    <section className="my-10 mx-auto w-full max-w-[1400px] px-5 md:px-20">
      <div className="flex gap-5 item-start w-full">
        <DashboardMenu />
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardLayout;
