import HomePage from "@/pages/HomePage";
import Header from "@/components/Header";

function App() {
  return (
    <div className="min-h-screen px-24">
      <Header />
      <main className="mt-20">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
