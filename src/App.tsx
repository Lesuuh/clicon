import AppRoutes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();
function App() {
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
