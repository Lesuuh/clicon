import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const user = useAuthStore((state) => state.user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
