import { Route, Routes } from "react-router";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import ShopPage from "../pages/ShopPage";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>
        <Route path="*" element={<NotFound message="Page not found" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
