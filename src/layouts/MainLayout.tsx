import { Outlet } from "react-router";
import Header from "@/components/common/Headers/Header";
import Footer from "@/components/common/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
