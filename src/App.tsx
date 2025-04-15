import AppRoutes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useAuthStore } from "./store/authStore";

const queryClient = new QueryClient();
function App() {
  const initAuth = useAuthStore((state) => state.initAuth);
  const user = useAuthStore((state) => state.user);

  console.log(user);

  useEffect(() => {
    initAuth();
  }, []);

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
