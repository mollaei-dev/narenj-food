import HomePage from "@/pages/HomePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen px-3 sm:px-7 md:px-10 xl:px-15 2xl:px-20">
      <Header />
      <main className="mt-20">
        <HomePage />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
