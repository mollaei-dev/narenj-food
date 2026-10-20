import HomePage from "@/pages/HomePage";
import Header from "@/components/Header";

function App() {
  return (
    <div className="min-h-screen px-3 sm:px-7 md:px-10 xl:px-15 2xl:px-20">
      <Header />
      <main className="mt-20">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
