import { Outlet } from "react-router";
import Header from "@/components/common/Headers/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
