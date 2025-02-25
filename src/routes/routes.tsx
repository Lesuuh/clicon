import { Route, Routes } from "react-router";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import ShopPage from "../pages/ShopPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
