import { Header } from "./components/Header";
import { Router } from "./assets/routes";

function App() {
  return (
    <main className="min-h-screen flex w-full items-center justify-center flex-col">
      <div className="w-[560px] max-w-full bg-zinc-700 rounded-b-md">
        <Router />
      </div>
    </main>
  );
}

export default App;
