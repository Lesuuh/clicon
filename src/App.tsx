import AppRoutes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import { syncCart } from "./lib/syncCart";
import { Toaster } from "sonner";
import { useCartStore } from "./store/cartStore";

const queryClient = new QueryClient();
function App() {
  const initAuth = useAuthStore((state) => state.initAuth);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    initAuth();
  }, []);

  useEffect(() => {
    if (user) {
      syncCart(user.uid);
    }
  }, [user]);

  const isMerged = useCartStore((state) => state.isMerged);
  console.log(isMerged);
  console.log(user);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full max-w-[1920px] mx-auto">
        <Toaster toastOptions={{ className: "bg-black text-white" }} />
        <AppRoutes />
      </div>
      {/* <ToastContainer /> */}
    </QueryClientProvider>
  );
}

export default App;
