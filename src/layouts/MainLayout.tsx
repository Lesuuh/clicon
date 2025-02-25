import { Outlet } from "react-router";
import Nav from "../components/common/Headers/Nav";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
