import { Outlet } from "react-router";
import Header from "@/components/Headers/Header";
import Footer from "@/components/Footer/Footer";

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
