import { Route, Routes } from "react-router";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import ShopPage from "../pages/ShopPage";
import NotFound from "@/pages/NotFound";
import LoginPage from "@/pages/LoginPage";

import ResetPassword from "@/pages/ResetPassword";
import VerifyEmailPage from "@/pages/VerifyEmailPage";
import ProductDetails from "@/pages/ProductDetails";
import OrderHistory from "@/pages/dashboard/OrderHistory";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import Profile from "@/pages/dashboard/Profile";
import Wishlist from "@/pages/dashboard/Wishlist";
import ProtectedRoutes from "@/utils/ProtectedRoutes";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="products" element={<ShopPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="verifyEmail" element={<VerifyEmailPage />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route element={<ProtectedRoutes />}>
            <Route element={<DashboardLayout />}>
              <Route path="profile" element={<Profile />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="orders" element={<OrderHistory />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound message="Page not found" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
