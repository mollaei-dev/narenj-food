import HomePage from "@/pages/HomePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Routes, Route } from "react-router";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <div className="flex min-h-screen flex-col px-3 sm:px-7 md:px-10 xl:px-15 2xl:px-20">
      <ScrollToHash />
      <Header />
      <main className="mt-20 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
