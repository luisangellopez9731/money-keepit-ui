import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { WorkspaceProvider } from "components/workspace-provider";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <WorkspaceProvider>
          <Router />
        </WorkspaceProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
