import AppRoutes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useAuthStore } from "./store/authStore";
import { syncCart } from "./lib/syncCart";
import { useCartStore } from "./store/cartStore";

const queryClient = new QueryClient();
function App() {
  const initAuth = useAuthStore((state) => state.initAuth);
  const user = useAuthStore.getState().user;
  const cart = useCartStore.getState().cart;

  useEffect(() => {
    initAuth();
  }, []);

  useEffect(() => {
    if (user) {
      syncCart(user.uid);
    }
  }, [user, cart]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full max-w-[1920px] mx-auto">
        <AppRoutes />
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
