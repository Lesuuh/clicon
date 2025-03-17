import AppRoutes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full max-w-[1920px] mx-auto">
        <AppRoutes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
