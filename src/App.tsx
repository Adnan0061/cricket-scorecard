import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MatchList from "./components/MatchList";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <header className="container bg-blue-600 text-white p-4 mx-auto ">
          <h1 className="text-xl font-semibold">Cricket</h1>
        </header>
        <div className="container bg-blue-400 mx-auto flex justify-center items-center p-3">
          <p className="text-xl font-semibold">Matches</p>
        </div>

        <MatchList />

        <footer className="container bg-gray-200 text-white p-6 mx-auto border-t border-gray-300"></footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
