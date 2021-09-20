import { Router } from "components";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen overflow-auto flex flex-col">
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
