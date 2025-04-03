import { Navigate, Route, Routes } from "react-router";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import ShopPage from "../pages/ShopPage";
import NotFound from "@/pages/NotFound";
import LoginPage from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage";
import { useEffect, useState } from "react";

// Define or import the User type
type User = {
  uid: string;
  email: string;
  displayName?: string;
};
import { auth } from "@/services/firebase";

const AppRoutes = () => {
  const [userState, setUserState] = useState<User | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
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
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route
            path="login"
            element={userState ? <Navigate to="/profile" /> : <LoginPage />}
          />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFound message="Page not found" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
