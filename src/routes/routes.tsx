import { Navigate, Route, Routes } from "react-router";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import ShopPage from "../pages/ShopPage";
import NotFound from "@/pages/NotFound";
import LoginPage from "@/pages/LoginPage";
// import ProfilePage from "@/pages/ProfilePage";
import { useEffect, useState } from "react";
import { auth } from "@/services/firebase";
import ResetPassword from "@/pages/ResetPassword";
import VerifyEmailPage from "@/pages/VerifyEmailPage";
import ProductDetails from "@/pages/ProductDetails";
import { Wishlist } from "@/pages/dashboard/Wishlist";
// import Dashboard from "@/pages/dashboard/Dashboard";
import OrderHistory from "@/pages/dashboard/OrderHistory";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import Profile from "@/pages/dashboard/Profile";

// Define or import the User type
type User = {
  uid: string;
  email: string;
  displayName?: string;
};

const AppRoutes = () => {
  const [userState, setUserState] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserState({
          uid: user.uid,
          email: user.email || "",
          displayName: user.displayName || undefined,
        });
      } else {
        setUserState(null);
      }
    });
    return () => unsubscribe(); // Unsubscribe on cleanup
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="products" element={<ShopPage />} />
          <Route
            path="login"
            element={userState ? <Navigate to="/profile" /> : <LoginPage />}
          />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="verifyEmail" element={<VerifyEmailPage />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="orders" element={<OrderHistory />} />
          </Route>
          <Route path="*" element={<NotFound message="Page not found" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
